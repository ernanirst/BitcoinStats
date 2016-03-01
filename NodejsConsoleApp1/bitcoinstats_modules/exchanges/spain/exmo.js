var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Exmo";
    this.country = countries.Spain;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_RUR, currencyPair.BTC_EUR];
    this.base_url = "https://api.exmo.com/v1/";
    this.volume_url = "ticker/";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var cur = pair.counterPair;
            if (pair.counterPair == "RUR") {
                cur = "RUB";
            }
            return callback(json["BTC_" + cur].vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback); //change from this.assignVolumeList
}

exports.exch = exch;
