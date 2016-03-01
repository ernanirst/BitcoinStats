var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Huobi";
    this.country = countries.China;
    this.pairs_list = [currencyPair.BTC_CNY, currencyPair.BTC_USD];
    this.base_url = "http://api.huobi.com/staticmarket/";
    this.volume_url = "ticker_btc_json.js";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.ticker.vol, pair);   //callback to assignToList
        }
        if (pair.counterPair == "CNY")
            json_handler.getJSONHttp(this.base_url + this.volume_url, this.assignVolume);
        else
            json_handler.getJSON("https://market.bityes.com/usd_btc/ticker.js", this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;