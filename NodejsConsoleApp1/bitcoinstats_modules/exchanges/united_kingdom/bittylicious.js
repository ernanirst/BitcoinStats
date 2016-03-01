var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bittylicious";
    this.country = countries.UnitedKingdom;
    //BTC/CZK,BTC/EUR,BTC/GBP,BTC/KRW,BTC/USD,BTC/ZAR
    this.pairs_list = [currencyPair.BTC_EUR, currencyPair.BTC_GBP, currencyPair.BTC_CZK, currencyPair.BTC_KRW,
        currencyPair.BTC_USD, currencyPair.BTC_ZAR];
    this.base_url = "https://bittylicious.com/api/v1/";
    this.volume_url = "ticker";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json[pair.counterPair + "BTC"].volume_24h, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;