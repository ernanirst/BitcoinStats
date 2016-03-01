var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "247 Exchange";
    this.country = countries.Belize;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_GBP, currencyPair.BTC_EUR, currencyPair.BTC_CAD,
        currencyPair.BTC_ZAR, currencyPair.BTC_CZK];
    this.base_url = "https://www.247exchange.com/api/";
    this.volume_url = "ticker/?volume=1&lastPrice=1";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.result[pair.toString()].volume24h, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback); //change from this.assignVolumeList
}

exports.exch = exch;
