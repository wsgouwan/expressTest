var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(8090, '120.27.189.171');

console.log('listen 8090')
