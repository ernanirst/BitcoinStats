var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bitcoin Deutschland AG";
    this.country = countries.Germany;
    this.pairs_list = [currencyPair.BTC_EUR];
    this.base_url = "https://bitcoinapi.de/v1/e0ef00e9f6a1b1f293184c3e8023c2cd/";
    this.volume_url = "trades.json";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var currentTime = new Date().getTime() / 1000;
            var vol = 0;
            for (var i = 0; i < json.length; i++) {
                if (json[i].date > currentTime - 86400) {
                    vol += parseFloat(json[i].amount);
                }
            }
            return callback(vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;