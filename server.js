var express = require('express');
var path = require('path');
var fs = require('fs');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname);

app.use(express.static(publicPath));

// Proxy for webpack-dev-server
if (!isProduction) {
  // We require the bundler inside the if block because
  // it is only needed in a development environment. 
  var bundle = require('./bundler.js');
  bundle();

  // Any requests to localhost:3000/build are proxied to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:3001'
    });
  });

  // Seed data while for staging env
  const json = JSON.parse(fs.readFileSync('points_of_interest.json', 'utf8'));

  app.get('/api/pois', function(req, res) {
    res.json(json);
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
