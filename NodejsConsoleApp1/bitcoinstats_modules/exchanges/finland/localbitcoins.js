var json_handler = require("./../../tools/json_handler");
var countries = require("./../../countries/country");
var currencyPair = require("./../../currencies/currency_pair");
var exchange = require("./../exchange");

function exch(callback) {
    /********************** Basic Info ************************/
    this.name = "Local Bitcoins";
    this.country = countries.Finland;
    this.pairs_list = [currencyPair.BTC_USD, currencyPair.BTC_VND,
        currencyPair.BTC_IDR, currencyPair.BTC_COP, currencyPair.BTC_KRW,
        currencyPair.BTC_CLP, currencyPair.BTC_JPY, currencyPair.BTC_PHP,
        currencyPair.BTC_INR, currencyPair.BTC_THB, currencyPair.BTC_MXN,
        currencyPair.BTC_ZAR, currencyPair.BTC_CNY, currencyPair.BTC_EGP,
        currencyPair.BTC_TTD, currencyPair.BTC_JMD, currencyPair.BTC_BMD,
        currencyPair.BTC_HRK, currencyPair.BTC_QAR, currencyPair.BTC_ILS,
        currencyPair.BTC_SAR, currencyPair.BTC_AED, currencyPair.BTC_MYR,
        currencyPair.BTC_KZT, currencyPair.BTC_PEN, currencyPair.BTC_BRL,
        currencyPair.BTC_RUB, currencyPair.BTC_RON, currencyPair.BTC_HUF,
        currencyPair.BTC_TRY, currencyPair.BTC_PLN, currencyPair.BTC_CZK,
        currencyPair.BTC_HKD, currencyPair.BTC_TWD, currencyPair.BTC_SGD,
        currencyPair.BTC_DKK, currencyPair.BTC_SEK, currencyPair.BTC_NOK,
        currencyPair.BTC_CHF, currencyPair.BTC_CAD, currencyPair.BTC_EUR,
        currencyPair.BTC_NZD, currencyPair.BTC_AUD, currencyPair.BTC_GBP];
    this.base_url = "http://api.bitcoincharts.com/v1/";
    this.volume_url = "markets.json";
    this.cont = 0;
    
    /********************** Get Volume List ************************/
    this.getVolume = function (exch, pair, callback) {
        this.assignVolume = function (json) {
            var vol = 0;
            var found = true;
            for (var i = 0; i < json.length && found; i++) {
                if (json[i].symbol == ("localbtc" + pair.counterPair)) {
                    vol = json[i].volume;
                    found = false;
                }
            }
            //if (found)              console.log("Error: Symbol not found");
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