//var db_handler = require('./bitcoinstats_modules/tools/db_handler');

/**
    * Return size of object
    * @param {Object} obj - Target object to measure size
    * @returns {Number} Size of object
*/
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


var errors = [];
/**
    * Count the amount of errors
    * @param {String} url - Add the url where the error happened to the error list
*/
var error_handling = function (url) {
    if (errors.indexOf(url) == -1) {
        errors.push(url);
    }
}

var array_exchanges = {};
var max_exch = 104;
var counter = 0;


/**
    * This is a callback function for all exchanges implementations, this function checks if all the volumes of the exchange are retrieved already and if all the exchanges are already done, 
 * it also calls the function that inserte the data on the database
    * @param {Object} obj - Target object to measure size
    * @returns {Number} Size of object
*/
var test = function (exch) { //callback to index
    counter++;
    console.log("Exchange " + counter + ": " + exch.name + "   (errors: " + Object.size(errors) + ")");
    if (Object.size(exch.volume_list) == Object.size(exch.pairs_list)) {
        //add to array
        var json_exch = {};
        for (var i = 0; i < exch.pairs_list.length; i++) {
            json_exch[exch.pairs_list[i].toString()] = exch.volume_list[exch.pairs_list[i].toString()];
        }
        array_exchanges[exch.name] = json_exch;
        
        //if reach number of exchanges, convert array to blob
        if (counter == max_exch - Object.size(errors)) {
            var json = JSON.parse(JSON.stringify(array_exchanges));
            //console.log(json);
			
			//implement db insert here
            //db_handler.insertExchangeiInBlob(json);
        }
    }
}


//argentina
var wideexchange = require('./bitcoinstats_modules/exchanges/argentina/wideexchange');

//australia
var independentreserve = require('./bitcoinstats_modules/exchanges/australia/independentreserve');
var btcmarkets = require('./bitcoinstats_modules/exchanges/australia/btcmarkets');
var brightonpeak = require('./bitcoinstats_modules/exchanges/australia/brightonpeak');

//barbados
var bitt = require('./bitcoinstats_modules/exchanges/barbados/bitt');

//belize
var exchange247 = require('./bitcoinstats_modules/exchanges/belize/247exchange');

//brazil
var foxbit = require('./bitcoinstats_modules/exchanges/brazil/foxbit');
var mercadobitcoin = require('./bitcoinstats_modules/exchanges/brazil/mercadobitcoin');
var negociecoins = require('./bitcoinstats_modules/exchanges/brazil/negociecoins');
var bitcointoyou = require('./bitcoinstats_modules/exchanges/brazil/bitcointoyou');
var flowbtc = require('./bitcoinstats_modules/exchanges/brazil/flowbtc');

//bulgaria
var btce = require('./bitcoinstats_modules/exchanges/bulgaria/btce');

//canada
var quadrigacx = require('./bitcoinstats_modules/exchanges/canada/quadrigacx');
var cointrader = require('./bitcoinstats_modules/exchanges/canada/cointrader');
var coinsquare = require('./bitcoinstats_modules/exchanges/canada/coinsquare');
var taurus = require('./bitcoinstats_modules/exchanges/canada/taurus');
var morrex = require('./bitcoinstats_modules/exchanges/canada/morrex');

//chile
var chilebit = require('./bitcoinstats_modules/exchanges/chile/chilebit');

//china
var vircurex = require('./bitcoinstats_modules/exchanges/china/vircurex');
var btcchina = require('./bitcoinstats_modules/exchanges/china/btcchina');
var btctrade = require('./bitcoinstats_modules/exchanges/china/btctrade');
var okcoin = require('./bitcoinstats_modules/exchanges/china/okcoin');
var bter = require('./bitcoinstats_modules/exchanges/china/bter');
var lakebtc = require('./bitcoinstats_modules/exchanges/china/lakebtc');
var huobi = require('./bitcoinstats_modules/exchanges/china/huobi');
var yunbi = require('./bitcoinstats_modules/exchanges/china/yunbi');
var chbtc = require('./bitcoinstats_modules/exchanges/china/chbtc');
var btc100 = require('./bitcoinstats_modules/exchanges/china/btc100');

//croatia
var bitkonan = require('./bitcoinstats_modules/exchanges/croatia/bitkonan');

//denmark
var hitbtc = require('./bitcoinstats_modules/exchanges/denmark/hitbtc');
var ccedk = require('./bitcoinstats_modules/exchanges/denmark/ccedk');

//france
var paymium = require('./bitcoinstats_modules/exchanges/france/paymium');

//finland
var bitalo = require('./bitcoinstats_modules/exchanges/finland/bitalo');
var localbitcoins = require('./bitcoinstats_modules/exchanges/finland/localbitcoins');

//germany
var bitcoinde = require('./bitcoinstats_modules/exchanges/germany/bitcoinde');

//greece
var btcgreece = require('./bitcoinstats_modules/exchanges/greece/btcgreece');

//hongkong
var bitfinex = require('./bitcoinstats_modules/exchanges/hongkong/bitfinex');
var gatecoin = require('./bitcoinstats_modules/exchanges/hongkong/gatecoin');

//india
var btcxindia = require('./bitcoinstats_modules/exchanges/india/btcxindia');
var coinsecure = require('./bitcoinstats_modules/exchanges/india/coinsecure');

//Indonesia
var bitcoinid = require('./bitcoinstats_modules/exchanges/indonesia/bitcoinid');

//Israel
var bit2c = require('./bitcoinstats_modules/exchanges/israel/bit2c');

//Japan
var bitflyer = require('./bitcoinstats_modules/exchanges/japan/bitflyer');
var coincheck = require('./bitcoinstats_modules/exchanges/japan/coincheck');
var zaif = require('./bitcoinstats_modules/exchanges/japan/zaif');
var quoine = require('./bitcoinstats_modules/exchanges/japan/quoine');
var btcbox = require('./bitcoinstats_modules/exchanges/japan/btcbox');

//Malta
var therocktrading = require('./bitcoinstats_modules/exchanges/malta/therocktrading');

//Mexico
var bitso = require('./bitcoinstats_modules/exchanges/mexico/bitso');
var mexbt = require('./bitcoinstats_modules/exchanges/mexico/mexbt');
var tuminium = require('./bitcoinstats_modules/exchanges/mexico/tuminium');

//netherlands
var clevercoin = require('./bitcoinstats_modules/exchanges/netherlands/clevercoin');
var bitex = require('./bitcoinstats_modules/exchanges/netherlands/bitex');
var bitonic = require('./bitcoinstats_modules/exchanges/netherlands/bitonic');
var litebit = require('./bitcoinstats_modules/exchanges/netherlands/litebit');

//new zealand
var bitnz = require('./bitcoinstats_modules/exchanges/new_zealand/bitnz');

//norway
var bitcoinsnorway = require('./bitcoinstats_modules/exchanges/norway/bitcoinsnorway');

//pakistan
var urdobit = require('./bitcoinstats_modules/exchanges/pakistan/urdobit');

//peru
var bitinka = require('./bitcoinstats_modules/exchanges/peru/bitinka');

//philippines
var btcexchange = require('./bitcoinstats_modules/exchanges/philippines/btcexchange');

//poland
var bitmarket = require('./bitcoinstats_modules/exchanges/poland/bitmarket');
var bitbay = require('./bitcoinstats_modules/exchanges/poland/bitbay');
var bitmaszyna = require('./bitcoinstats_modules/exchanges/poland/bitmaszyna');
var bitmarket24 = require('./bitcoinstats_modules/exchanges/poland/bitmarket24');
var bitorado = require('./bitcoinstats_modules/exchanges/poland/bitorado');
var bitcurex = require('./bitcoinstats_modules/exchanges/poland/bitcurex');
var bitstar = require('./bitcoinstats_modules/exchanges/poland/bitstar');

//portugal
var usecryptos = require('./bitcoinstats_modules/exchanges/portugal/usecryptos');
var zyado = require('./bitcoinstats_modules/exchanges/portugal/zyado');

//singapore
var fybsg = require('./bitcoinstats_modules/exchanges/singapore/fybsg');
var okcoin_int = require('./bitcoinstats_modules/exchanges/singapore/okcoin_int');
var bitx = require('./bitcoinstats_modules/exchanges/singapore/bitx');

//south africa
var ice3x = require('./bitcoinstats_modules/exchanges/south_africa/ice3x');

//south korea
var coinone = require('./bitcoinstats_modules/exchanges/south_korea/coinone');
var korbit = require('./bitcoinstats_modules/exchanges/south_korea/korbit');

//spain
var exmo = require('./bitcoinstats_modules/exchanges/spain/exmo');

//sweden
var fybse = require('./bitcoinstats_modules/exchanges/sweden/fybse');

//thailand
var bitcointhailand = require('./bitcoinstats_modules/exchanges/thailand/btcth');

//turkey
var btcturk = require('./bitcoinstats_modules/exchanges/turkey/btcturk');
var koinim = require('./bitcoinstats_modules/exchanges/turkey/koinim');

//united kingdom
var bitok = require('./bitcoinstats_modules/exchanges/united_kingdom/bitok');
var goc = require('./bitcoinstats_modules/exchanges/united_kingdom/goc');
var livecoin = require('./bitcoinstats_modules/exchanges/united_kingdom/livecoin');
var bit_x = require('./bitcoinstats_modules/exchanges/united_kingdom/bit-x');
var loyalbit = require('./bitcoinstats_modules/exchanges/united_kingdom/loyalbit');
var coinfloor = require('./bitcoinstats_modules/exchanges/united_kingdom/coinfloor');
var cex = require('./bitcoinstats_modules/exchanges/united_kingdom/cex');
var bitstamp = require('./bitcoinstats_modules/exchanges/united_kingdom/bitstamp');
var indacoin = require('./bitcoinstats_modules/exchanges/united_kingdom/indacoin');
var coincorner = require('./bitcoinstats_modules/exchanges/united_kingdom/coincorner');
var coinmate = require('./bitcoinstats_modules/exchanges/united_kingdom/coinmate');
var coinlink = require('./bitcoinstats_modules/exchanges/united_kingdom/coinlink');
var bitbays = require('./bitcoinstats_modules/exchanges/united_kingdom/bitbays');
var bitbargain = require('./bitcoinstats_modules/exchanges/united_kingdom/bitbargain');
var cryptonit = require('./bitcoinstats_modules/exchanges/united_kingdom/cryptonit');
var bittylicious = require('./bitcoinstats_modules/exchanges/united_kingdom/bittylicious');

//united states
var wallofcoins = require('./bitcoinstats_modules/exchanges/united_states/wallofcoins');
var monetago = require('./bitcoinstats_modules/exchanges/united_states/monetago');
var campbx = require('./bitcoinstats_modules/exchanges/united_states/campbx');
var bitquick = require('./bitcoinstats_modules/exchanges/united_states/bitquick');
var itbit = require('./bitcoinstats_modules/exchanges/united_states/itbit');
var coinbase = require('./bitcoinstats_modules/exchanges/united_states/coinbase');
var kraken = require('./bitcoinstats_modules/exchanges/united_states/kraken');
var gemini = require('./bitcoinstats_modules/exchanges/united_states/gemini');

//venezuela
var surbitcoin = require('./bitcoinstats_modules/exchanges/venezuela/surbitcoin');

//vietnam
var vbtc = require('./bitcoinstats_modules/exchanges/vietnam/vbtc');

 
//init
wideexchange.exch(test);
independentreserve.exch(test);
btcmarkets.exch(test);
brightonpeak.exch(test);
bitt.exch(test);
exchange247.exch(test);
mercadobitcoin.exch(test);
foxbit.exch(test);
negociecoins.exch(test);
bitcointoyou.exch(test);
flowbtc.exch(test);
btce.exch(test);
quadrigacx.exch(test);
cointrader.exch(test);
coinsquare.exch(test);
taurus.exch(test);
morrex.exch(test);
chilebit.exch(test);
vircurex.exch(test);
btcchina.exch(test);
btctrade.exch(test);
okcoin.exch(test);
bter.exch(test);
lakebtc.exch(test);
huobi.exch(test);
yunbi.exch(test);
chbtc.exch(test);
btc100.exch(test);
bitkonan.exch(test);
hitbtc.exch(test);
ccedk.exch(test);
paymium.exch(test);
bitalo.exch(test);
localbitcoins.exch(test);
bitcoinde.exch(test);
btcgreece.exch(test);
bitfinex.exch(test);
gatecoin.exch(test);
btcxindia.exch(test);
coinsecure.exch(test);
bitcoinid.exch(test);
bit2c.exch(test);
bitflyer.exch(test);
coincheck.exch(test);
zaif.exch(test);
quoine.exch(test);
btcbox.exch(test);
therocktrading.exch(test);
bitso.exch(test);
mexbt.exch(test);
tuminium.exch(test);
clevercoin.exch(test);
bitex.exch(test);
bitonic.exch(test);
litebit.exch(test);
bitnz.exch(test);
bitcoinsnorway.exch(test);
urdobit.exch(test);
bitinka.exch(test);
btcexchange.exch(test);
bitmarket.exch(test);
bitbay.exch(test);
bitmaszyna.exch(test);
bitmarket24.exch(test);
bitorado.exch(test);
bitcurex.exch(test);
bitstar.exch(test);
usecryptos.exch(test);
zyado.exch(test);
fybsg.exch(test);
okcoin_int.exch(test);
bitx.exch(test);
ice3x.exch(test);
coinone.exch(test);
korbit.exch(test);
//exmo.exch(test);
fybse.exch(test);
bitcointhailand.exch(test);
btcturk.exch(test);
koinim.exch(test);
bitok.exch(test);
goc.exch(test);
livecoin.exch(test);
bit_x.exch(test);
loyalbit.exch(test);
coinfloor.exch(test);
cex.exch(test);
bitstamp.exch(test);
indacoin.exch(test);
coincorner.exch(test);
coinmate.exch(test);
coinlink.exch(test);
bitbays.exch(test);
bitbargain.exch(test);
cryptonit.exch(test);
bittylicious.exch(test);
wallofcoins.exch(test);
monetago.exch(test);
campbx.exch(test);
bitquick.exch(test);
itbit.exch(test);
coinbase.exch(test);
kraken.exch(test);
gemini.exch(test);
surbitcoin.exch(test);
vbtc.exch(test);

exports.error_handling = error_handling;