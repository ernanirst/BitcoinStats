var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "CCEDK";
    this.country = countries.Denmark;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_EUR, currencyPair.BTC_DKK, currencyPair.BTC_CNY,
        currencyPair.BTC_RUB];
    this.base_url = "https://www.ccedk.com/api/v1/";
    this.volume_url = "stats/marketdepthfull";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var cur = pair.basePair.toLowerCase() + '\/' + pair.counterPair.toLowerCase();
            var allTicks = json.response.entities;
            var vol = 0;
            var cont = true;
            for (var i = 0; i < allTicks.length && cont; i++) {
                if (allTicks[i].pair_name == cur) {
                    vol = allTicks[i].vol;
                    cont = false;
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