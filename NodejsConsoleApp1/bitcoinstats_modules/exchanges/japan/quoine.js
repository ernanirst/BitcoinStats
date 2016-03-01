var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Quoine";
    this.country = countries.Japan;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_JPY, currencyPair.BTC_SGD,
        currencyPair.BTC_HKD, currencyPair.BTC_IDR, currencyPair.BTC_AUD, currencyPair.BTC_PHP,
        currencyPair.BTC_CNY, currencyPair.BTC_INR];
    this.base_url = "https://api.quoine.com/products/code/";
    this.volume_url = "CASH/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.volume_24h, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.basePair + pair.counterPair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;