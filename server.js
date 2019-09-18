//server.js
const express = require('express');
//const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(__public));
app.use(express.static(path.join(__public, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__public, 'build', 'index.html'));
});
app.listen(port);