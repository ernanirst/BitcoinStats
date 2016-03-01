var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "BTC Trade";
    this.country = countries.China;
    this.pairs_list = [currencyPair.BTC_CNY];
    this.base_url = "http://api.btctrade.com/api/";
    this.volume_url = "ticker?coin=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.vol, pair);   //callback to assignToList
        }
        json_handler.getJSONHttp(this.base_url + this.volume_url + pair.basePair.toLowerCase(), this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;