import React, { Component } from 'react';

export default class Html extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Webpack</title>
        </head>
        <body>
          <div id='container'></div>
          <script src='/app.js'></script>
        </body>
      </html>
    );
  }
}
