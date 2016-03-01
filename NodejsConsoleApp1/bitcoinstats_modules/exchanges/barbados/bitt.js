var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bitt";
    this.country = countries.Barbados;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_GBP, currencyPair.BTC_AUD,
        currencyPair.BTC_CAD, currencyPair.BTC_SGD, currencyPair.BTC_JPY, currencyPair.BTC_HKD, currencyPair.BTC_CHF,
        currencyPair.BTC_NOK, currencyPair.BTC_BBD, currencyPair.BTC_TTD, currencyPair.BTC_JMD];
    this.base_url = "https://api.bitt.com:8400/ajax/v1/";
    this.volume_url = "GetTicker";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json["volume24hr"], pair);   //callback to assignToList
        }
        var body = "{\"productPair\": \"BTC" + pair.counterPair + "\"}";
        json_handler.getJSONHttpPost(this.base_url + this.volume_url, body, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;