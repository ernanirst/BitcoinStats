var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bitmaszyna";
    this.country = countries.Poland;
    this.pairs_list = [currencyPair.BTC_PLN];
    this.base_url = "https://bitmaszyna.pl/api/";
    this.volume_url = "/ticker.json";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.volume1, pair);   //callback to assignToList
        }
        json_handler.getJSONHttp(this.base_url + pair.toString().replace('_','') + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;