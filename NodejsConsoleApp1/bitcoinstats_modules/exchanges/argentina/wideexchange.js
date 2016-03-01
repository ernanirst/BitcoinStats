var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Wide Exchange";
    this.country = countries.Argentina;
    this.pairs_list = [currencyPair.BTC_ARS];
    this.base_url = "https://www.wideexchange.com/api/";
    this.volume_url = "/ticker?pair=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var currentTime = new Date().getTime() / 1000;
            var vol = 0;
            for (var i = 0; i < json.lastTrades.length; i++) {
                if (json.lastTrades[i].date > currentTime - 86400) {
                    vol += parseFloat(json.lastTrades[i].amount);
                } 
            }
            return callback(vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.toString().replace('_',''), this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;