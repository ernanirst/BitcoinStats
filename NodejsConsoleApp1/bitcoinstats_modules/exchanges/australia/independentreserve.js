var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Independent Reserve";
    this.country = countries.Australia;
    this.pairs_list = [currencyPair.BTC_AUD, currencyPair.BTC_NZD, currencyPair.BTC_USD];
    this.base_url = "https://api.independentreserve.com/Public/GetMarketSummary?";
    this.volume_url = "primaryCurrencyCode=xbt&secondaryCurrencyCode=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.DayVolumeXbtInSecondaryCurrrency, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.counterPair, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;