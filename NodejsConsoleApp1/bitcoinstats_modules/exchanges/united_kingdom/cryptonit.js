var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "BTC Turk";
    this.country = countries.Turkey;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR];
    this.base_url = "https://cryptonit.net/apiv2/rest/public/ccorder?";
    this.volume_url = "ticker&ask_currency=btc&bid_currency=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.volume.BTC, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.counterPair.toLowerCase(), this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;