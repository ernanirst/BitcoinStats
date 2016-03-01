var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bit2C";
    this.country = countries.Israel;
    this.pairs_list = [currencyPair.BTC_ILS];
    this.base_url = "https://www.bit2c.co.il/Exchanges/BtcNis";
    this.volume_url = "/Ticker.json";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.a, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;