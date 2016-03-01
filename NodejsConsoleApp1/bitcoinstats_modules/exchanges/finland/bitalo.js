var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bitalo";
    this.country = countries.Finland;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_PLN, currencyPair.BTC_GBP,
        currencyPair.BTC_AUD, currencyPair.BTC_CAD];
    this.base_url = "https://bitalo.com/api/";
    this.volume_url = "/ticker.json";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + pair.counterPair + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;