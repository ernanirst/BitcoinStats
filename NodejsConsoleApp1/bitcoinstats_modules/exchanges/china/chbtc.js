var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "ChBTC";
    this.country = countries.China;
    this.pairs_list = [currencyPair.BTC_CNY];
    this.base_url = "http://api.chbtc.com/data";
    this.volume_url = "/ticker";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.ticker.vol, pair);   //callback to assignToList
        }
        json_handler.getJSONHttp(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;