var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Vircurex";
    this.country = countries.China;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR];
    this.base_url = "https://api.vircurex.com/api/";
    this.volume_url = "get_volume.json?base=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.value, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.basePair + "&alt=" + pair.counterPair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;