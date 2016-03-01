var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "BitX";
    this.country = countries.Singapore;
    this.pairs_list = [currencyPair.BTC_ZAR, currencyPair.BTC_MYR, currencyPair.BTC_NGN];
    this.base_url = "https://api.mybitx.com/api/1/";
    this.volume_url = "ticker?pair=XBT";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.rolling_24_hour_volume, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.counterPair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;