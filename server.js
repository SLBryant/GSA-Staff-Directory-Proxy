var request = require('request');
var express = require('express');
var app = express();

var apiUrl = 'http://m.gsa.gov/api';

app.use('/api', function(req, res) {
  var url = apiUrl + req.url;
  console.log('request: ',url)
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);