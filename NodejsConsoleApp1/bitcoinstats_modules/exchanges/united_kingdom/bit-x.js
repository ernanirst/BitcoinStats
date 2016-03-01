var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bit-X";
    this.country = countries.UnitedKingdom;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_GBP, currencyPair.BTC_EUR];
    this.base_url = "https://bit-x.com/api/public/";
    this.volume_url = "ticker?pair=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.data.volume, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.basePair + pair.counterPair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;