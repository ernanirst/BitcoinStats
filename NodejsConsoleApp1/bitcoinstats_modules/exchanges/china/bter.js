var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bter";
    this.country = countries.China;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_CNY];
    this.base_url = "http://data.bter.com/api/1/";
    this.volume_url = "ticker/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.vol_btc, pair);   //callback to assignToList
        }
        json_handler.getJSONHttp(this.base_url + this.volume_url + pair.toString(), this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;