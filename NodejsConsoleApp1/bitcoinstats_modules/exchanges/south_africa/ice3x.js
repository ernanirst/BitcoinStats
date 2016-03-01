var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Ice 3X";
    this.country = countries.SouthAfrica;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_GBP, currencyPair.BTC_ZAR, currencyPair.BTC_NGN];
    this.base_url = "https://api.ice3x.com/market/BTC/";
    this.volume_url = "/trades?since=58345";
    
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
        json_handler.getJSON(this.base_url + pair.counterPair + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;