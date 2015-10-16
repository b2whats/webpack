import webpack from 'webpack'
import config from './config'
var StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;

const babelLoaderQuery = {
  stage: 0,
  plugins: ['react-transform'],
  extra: {
    'react-transform': {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }]
    }
  }
}

export default  {
  devtool: 'eval',
  entry: {
    'app': [
      'webpack-hot-middleware/client',
      config.entry
    ]
  },
  output: {
    path: config.outputPath,
    filename: '[name].js',
    publicPath: `/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?' + JSON.stringify(babelLoaderQuery),
      include: config.srcFolder
    }]
  },
  profile: true
}
