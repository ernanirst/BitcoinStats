var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "FYB-SE";
    this.country = countries.Sweden;
    this.pairs_list = [currencyPair.BTC_SEK];
    this.base_url = "https://www.fybse.se/api/";
    this.volume_url = "/tickerdetailed.json";
    
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