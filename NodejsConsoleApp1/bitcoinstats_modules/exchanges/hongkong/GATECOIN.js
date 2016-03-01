var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Gatecoin";
    this.country = countries.HongKong;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_HKD];
    this.base_url = "https://gatecoin.com/api/Public/";
    this.volume_url = "LiveTickers";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var vol = - 1;
            var found = true;
            for(var i = 0;i < json.tickers.length && found;i++){
                if (json.tickers[i].currencyPair == (pair.basePair + pair.counterPair)) {
                    vol = json.tickers[i].volume;
                    found = false;
                }
            }
            return callback(vol, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;