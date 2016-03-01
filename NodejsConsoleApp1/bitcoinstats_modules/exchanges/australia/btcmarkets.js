var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "BTC Markets";
    this.country = countries.Australia;
    this.pairs_list = [currencyPair.BTC_AUD];
    this.base_url = "https://api.btcmarkets.net/market/";
    this.volume_url = "/trades";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            var currentTime = new Date().getTime() / 1000;
            var vol = 0;
            var time = true;
            for(var i = 0;i < json.length && time;i++){
                if (json[i].date > currentTime - 86400) {
                    vol += json[i].amount;
                } else
                    time = false;
            }
            return callback(vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + pair.basePair + "/" + pair.counterPair + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;