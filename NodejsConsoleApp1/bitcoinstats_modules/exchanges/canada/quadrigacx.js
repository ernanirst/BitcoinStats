var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "QuadrigaCX";
    this.country = countries.Canada;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_CAD];
    this.base_url = "https://api.quadrigacx.com/v2";
    this.volume_url = "/ticker?book=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.volume, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.toString().toLowerCase(), this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;