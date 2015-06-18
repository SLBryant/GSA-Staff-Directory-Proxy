var request = require('request');
var express = require('express');
var app = express();

var apiUrl = 'http://m.gsa.gov/api';

app.use('/api', function(req, res) {
    var url = apiUrl + req.url;
    console.log('request: ', url)
    /*req.pipe(request({
    	headers: {
    		'Accept': 'application/json'
    	},
    	uri: url
    })).pipe(res);*/
request({
    	headers: {
    		'Accept': 'application/json'
    	},
    	uri: url
    },function(error,response,json){
    	json = JSON.parse(json)
    	res.header('Access-Control-Allow-Origin','*').json(json);
    })
	
});

app.listen(process.env.PORT || 3000);
