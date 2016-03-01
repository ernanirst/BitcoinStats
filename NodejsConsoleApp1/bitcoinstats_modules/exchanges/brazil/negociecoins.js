var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "NegocieCoins";
    this.country = countries.Brazil;
    this.pairs_list = [currencyPair.BTC_BRL];
    this.base_url = "http://www.negociecoins.com.br/api/v3/btcbrl/";
    this.volume_url = "ticker";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            return callback(json.vol, pair);   //callback to assignToList
        }
        json_handler.getJSONHttp(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback); //change from this.assignVolumeList
}

exports.exch = exch;
