var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Bitinka";
    this.country = countries.Peru;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_ARS, currencyPair.BTC_PEN, currencyPair.BTC_BOB, 
        currencyPair.BTC_VEF, currencyPair.BTC_BRL, currencyPair.BTC_COP];
    this.base_url = "https://www.bitinka.pe/api/apinka/";
    this.volume_url = "volumen24?format=json";
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            console.log();
            if(pair.counterPair == "VEF")
                return callback(json.volumens['vol_BSF'].BTC, pair);   //callback to assignToList
            else
                return callback(json.volumens['vol_' + pair.counterPair].BTC, pair);   //callback to assignToList
        }
        json_handler.getJSON(this.base_url + this.volume_url, this.assignVolume);
    };
    
    /********************** Declare Functions ************************/
    this.getVolumeList = exchange.getVolumeList;
    
    /********************** Call Functions ************************/
    this.getVolumeList(this, callback);
}

exports.exch = exch;