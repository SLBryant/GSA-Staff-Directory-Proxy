var request = require('request');
var express = require('express');
var app = express();

var apiUrl = 'http://m.gsa.gov/api';

app.use('/api', function(req, res) {
    var url = apiUrl + req.url;
    console.log('request: ', url)
    request({
    	uri: url,
        headers: {
            'Accept': 'application/json'
        }
    }, function(error, response, json) {
    	if (!error && response.statusCode == 200) {
    		json = JSON.parse(json)
        	res.header('Access-Control-Allow-Origin', '*').error('404');
    	}
    })

});

app.listen(process.env.PORT || 3000);
