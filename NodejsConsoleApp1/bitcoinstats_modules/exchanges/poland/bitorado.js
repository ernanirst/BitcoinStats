var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bitorado";
    this.country = countries.Poland;
    this.pairs_list = [currencyPair.BTC_PLN];
    this.base_url = "https://www.bitorado.com/api/market/";
    this.volume_url = "/ticker";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.result.vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + pair.toString().replace('_','-') + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;