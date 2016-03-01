var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "CoinFloor";
    this.country = countries.UnitedKingdom;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_GBP, currencyPair.BTC_PLN];
    this.base_url = "https://webapi.coinfloor.co.uk:8090/";
    this.volume_url = "bist/XBT/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.volume, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.counterPair + "/ticker/", this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;