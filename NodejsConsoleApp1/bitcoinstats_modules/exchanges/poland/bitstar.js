var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "BitStar";
    this.country = countries.Poland;
    this.pairs_list = [currencyPair.BTC_PLN];
    this.base_url = "https://bitstar.pl/api/transactions/";
    this.volume_url = "?currency_from=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var currentTime = new Date().getTime() / 1000;
            var vol = 0;
            for (var i = 0; i < json.result.length; i++) {
                if (json.result[i].created_at > currentTime - 86400) {
                    vol += parseFloat(json.result[i].amount);
                } 
            }
            return callback(vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.counterPair + "&currency_to=" + pair.basePair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;