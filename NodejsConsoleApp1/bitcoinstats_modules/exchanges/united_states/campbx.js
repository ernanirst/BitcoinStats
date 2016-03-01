var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Camp BX";
    this.country = countries.UnitedStates;
    this.pairs_list = [currencyPair.BTC_USD];
    this.base_url = "http://api.bitcoincharts.com/v1/";
    this.volume_url = "markets.json";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var vol = -1;
            var found = true;
            for (var i = 0; i < json.length && found; i++) {
                if (json[i].symbol == "cbxUSD") {
                    vol = json[i].volume;
                    found = false;
                }
            }
            if (found)
                console.log("Error: Symbol not found");
            return callback(vol, pair);   //callback to assignToList
                
        }
        json_handler.getJSONHttp(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;