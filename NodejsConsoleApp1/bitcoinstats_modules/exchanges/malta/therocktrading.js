var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "The Rock Trading";
    this.country = countries.Malta;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_GBP];
    this.base_url = "https://www.therocktrading.com/api";
    this.volume_url = "/ticker/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.result[0].volume_traded, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.basePair + pair.counterPair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;