var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Coin Mate";
    this.country = countries.UnitedKingdom;
    this.pairs_list = [currencyPair.BTC_EUR];
    this.base_url = "https://coinmate.io/api/";
    this.volume_url = "ticker?currencyPair=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.data.amount, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.toString(), this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;