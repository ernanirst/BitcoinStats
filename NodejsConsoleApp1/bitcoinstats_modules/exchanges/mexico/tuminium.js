var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Tuminium";
    this.country = countries.Mexico;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_MXN];
    this.base_url = "https://tuminium.com/api/tuminium/";
    this.volume_url = "ticker/BTC";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.ticker.vol_24h, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.counterPair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback); //change from this.assignVolumeList
}

exports.exch = exch;
