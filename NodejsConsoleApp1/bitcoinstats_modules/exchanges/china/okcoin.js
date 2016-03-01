var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "OkCoin";
    this.country = countries.China;
    this.pairs_list = [currencyPair.BTC_CNY];
    this.base_url = "https://www.okcoin.cn/api/v1";
    this.volume_url = "/ticker.do?symbol=";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        var volume = [];
        this.assignVolume = function (json) {
            return callback(json.ticker.vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url + pair.toString().toLowerCase(), this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;