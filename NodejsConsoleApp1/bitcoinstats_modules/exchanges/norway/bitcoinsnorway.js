var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bitcoins Norway";
    this.country = countries.Norway;
    this.pairs_list = [currencyPair.BTC_NOK];
    this.base_url = "https://bitcoinsnorway.com:8400/ajax/v1/";
    this.volume_url = "GetTicker";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json["volume24hr"], pair);   //callback to assignToList
        }
        var body = "{\"instruments\": \"XBT" + pair.counterPair + "\"}";
        json_handler.getJSONHttpPost(this.base_url + this.volume_url, body, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;