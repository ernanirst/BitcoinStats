var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "GOC";
    this.country = countries.UnitedKingdom;
    this.pairs_list = [currencyPair.BTC_RUR, currencyPair.BTC_USD];
    this.base_url = "https://goc.io/api/";
    this.volume_url = "/ticker/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.ticker.vol_cur, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + pair.toString().toLowerCase() + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;