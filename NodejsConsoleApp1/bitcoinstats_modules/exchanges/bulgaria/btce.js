var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "BTC-e";
    this.country = countries.Bulgaria;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_RUB];
    this.base_url = "https://btc-e.com/api/3/";
    this.volume_url = "ticker/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var cur = pair.toString().toLowerCase();
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json[cur].vol_cur, pair);   //callback to assignToList
        }
        if (pair.toString() == "BTC_RUB") cur = "btc_rur";
        json_handler.getJSON(this.base_url + this.volume_url + cur, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;