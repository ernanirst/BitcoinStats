var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Gemini";
    this.country = countries.UnitedStates;
    this.pairs_list = [currencyPair.BTC_USD];
    this.base_url = "https://api.gemini.com/v1/";
    this.volume_url = "trades/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var found = true;
        var vol = 0;
        var currentTime = new Date().getTime() / 1000;
        var assignVolume = function (json) {
            for (var i = json.length - 1; i >= 0 && found; i--) {
                vol += parseFloat(json[i].amount);
                if (i == 0) {
                    if (json[0].timestamp >= currentTime) {
                        //return callback(vol, pair);   //callback to assignToList
                    } else {
                        json_handler.getJSON(exch.base_url + exch.volume_url + pair.toString().toLowerCase().replace('_', '') + "?since=" + (json[0].timestamp + 1), assignVolume);
                    }
                }
            }
            if (json.length == 0)
                return callback(vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.toString().toLowerCase().replace('_','') + "?since=" + parseInt(currentTime - 86400), assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;