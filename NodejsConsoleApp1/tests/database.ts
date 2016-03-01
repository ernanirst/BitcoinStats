//declare function require(name: string);
import assert = require('assert');

var countries = require("../bitcoinstats_modules/countries/country");
var currencyPair = require("../bitcoinstats_modules/currencies/currency_pair");
var db_handler = require('../bitcoinstats_modules/tools/db_handler');


var resDBDelete = function (error, result) {
    //check for error when remove
    if (error) {
        console.log("Error: " + result);
        assert.ok(false, "Error when deleting on database.");
    } 
}

var resDBInsert = function (error, result, partitionKey, rowKey) {
    //check for error when insert
    if (error) {
        console.log("Error: " + result);
        assert.ok(false, "Error when inserting on database.");
    } 

    //try to remove
    else {
        db_handler.deleteEntityOfDB(partitionKey, rowKey, resDBDelete);
    }

}

export function TestDatabaseConnection() {

    //create an exchange object
    var exch: any = new Object();
    exch.name = "Test";
    exch.country = countries.Brazil;
    exch.pairs_list = [currencyPair.BTC_BRL, currencyPair.BTC_USD, currencyPair.BTC_CNY];
    exch.base_url = "https://api.blinktrade.com/api/v1/";
    exch.volume_url = "/ticker";

    //assign test values
    exch.volume_list = [];
    exch.volume_list["BTC_BRL"] = 12.0425;
    exch.volume_list["BTC_USD"] = 10000;
    exch.volume_list["BTC_CNY"] = 1000000.25;

    //insert on db
    for (var i = 0; i < exch.pairs_list.length; i++) {
        console.log("Volume " + exch.pairs_list[i] + ": " + exch.volume_list[exch.pairs_list[i]]);
        db_handler.insertExchangeiInDB(exch, exch.pairs_list[i], resDBInsert);
    }
    
}
