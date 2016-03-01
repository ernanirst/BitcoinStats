var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Coin Square";
    this.country = countries.Canada;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_CAD];
    this.base_url = "https://coinsquare.io/";
    this.volume_url = "?method=quotes";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var vol = 0;
            var found = true;
            for(var i = 0;i < json.quotes.length && found;i++){
                if (json.quotes[i].ticker == pair.counterPair && json.quotes[i].base == pair.basePair) {
                    vol = json.quotes[i].volbase / 100000000;
                    found = false;
                }
            }
            if (!found)
                return callback(vol, pair);   //callback to assignToList
            else {
                console.log("Error pair " + pair.ToString());
                return callback(-1, pair);
            } 
        }
        json_handler.getJSON(this.base_url + pair.toString().toLowerCase() + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;