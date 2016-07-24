var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var serveIndex = require('serve-index');
var express = require('express');
var app = new express();
var path = require('path');
var port = 8080;

var compiler = webpack(config);
app.use('/lib', serveIndex(path.join(__dirname, 'lib')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/message', function(req, res) {
  res.sendFile(__dirname + '/message.json');
});

app.get('/todos', function(req, res) {
  res.sendFile(__dirname + '/todos.json');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
