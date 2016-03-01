var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Coin Trader";
    this.country = countries.Canada;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_CAD];
    this.base_url = "https://www.cointrader.net/api4";
    this.volume_url = "/stats/daily/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        var cur = pair.toString().replace('_', '');
        this.assignVolume = function (json) {
            return callback(json.data[cur].volume, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + cur, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;