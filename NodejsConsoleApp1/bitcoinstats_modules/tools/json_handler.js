var app = require('../../app');

/**
     * Get JSON from HTTPS
     * @param {String} url - Target URL
     * @param {Function} callback - Function called with the result as parameter
*/
var getJSON = function (url, callback) {
    var http = require('https');
    http.get(url, function (res) {
        var body = '';
        
        res.on('data', function (chunk) {
            body += chunk;
        });
        
        res.on('end', function () {
            var err = false;
            try {
                var response = JSON.parse(body);
            } catch (e) {
                console.log(e + ": " + body);
                err = true;
            }
            if(!err)
                return callback(response);
        });
    
    }).on('error', function (e, r, body) {
        app.error_handling(url.split('/')[2]);
        console.log("Got error: " + e);
        console.log("Main URL: " + url.split('/')[2]);
    });
}

/**
     * Get JSON from HTTP
     * @param {String} url - Target URL
     * @param {Function} callback - Function called with the result as parameter
*/
var getJSONHttp = function (url, callback) {
    var request = require("request");
    
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        
        if (!error && response.statusCode === 200) {
            callback(body);
        } else {
            app.error_handling(url.split('/')[2]);
            console.log("Got error: " + error);
            console.log("URL: " + url);
        }
    })
}

/**
    * Post JSON
    * @param {String} url - Target URL
    * @param {String} text - Body of POST
    * @param {Function} callback - Function called with the result as parameter
*/
var getJSONHttpPost = function (url, text, callback){
    //Load the request module
    var request = require('request');
    
    //Lets configure and request
    request({
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: text
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            body = JSON.parse(body);
            callback(body);
        } else {
            app.error_handling(url.split('/')[2]);
            console.log("Got error: " + error);
            console.log("URL: " + url);
        }
    });
}

/**
    * Get JSON from HTTP sending user-agent (only coinbase require this)
    * @param {String} url - Target URL
    * @param {Function} callback - Function called with the result as parameter
*/
var getJSONHttpGet = function (url, callback) {
    
    var request = require("request");
    request.get({
        headers: {
            'content-type' : 'application/json',
            'user-agent': 'nodejs'
        },
        url: url
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            body = JSON.parse(body);
            callback(body);
        } else {
            app.error_handling(url.split('/')[2]);
            console.log("Got error: " + error);
            console.log("URL: " + url);
        }
    });
}

exports.getJSON = getJSON;
exports.getJSONHttp = getJSONHttp;
exports.getJSONHttpPost = getJSONHttpPost;
exports.getJSONHttpGet = getJSONHttpGet;

