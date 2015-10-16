import Express from 'express'
import webpack from 'webpack'
import config from './config'
import devConfig from './dev.config'
import Html from '../src/Html';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

const compiler = webpack(devConfig)

const serverOptions = {
  contentBase: config.staticFolder,
  quiet: true,
  hot: true,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  publicPath: devConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'}
}

const app = new Express()
app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))

app.use(require('serve-static')(config.staticFolder))

app.use('*', (req, res) => {
  res.send('<!doctype html>\n' +
    ReactDOMServer.renderToString(<Html/>));
});

app.listen(config.port, (err) => {
  err ?
    console.error(err) :
    console.info('Webpack development server listening on port %s', config.port)
})
