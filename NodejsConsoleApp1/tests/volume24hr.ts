//declare function require(name: string);
import assert = require('assert');

//argentina
import wideexchange = require('../bitcoinstats_modules/exchanges/argentina/wideexchange');

//australia
import independentreserve = require('../bitcoinstats_modules/exchanges/australia/independentreserve');
import btcmarkets = require('../bitcoinstats_modules/exchanges/australia/btcmarkets');
import brightonpeak = require('../bitcoinstats_modules/exchanges/australia/brightonpeak');

//barbados
import bitt = require('../bitcoinstats_modules/exchanges/barbados/bitt');

//belize
import exchange247 = require('../bitcoinstats_modules/exchanges/belize/247exchange');

//brazil
import foxbit = require('../bitcoinstats_modules/exchanges/brazil/foxbit');
import mercadobitcoin = require('../bitcoinstats_modules/exchanges/brazil/mercadobitcoin');
import negociecoins = require('../bitcoinstats_modules/exchanges/brazil/negociecoins');
import bitcointoyou = require('../bitcoinstats_modules/exchanges/brazil/bitcointoyou');
import flowbtc = require('../bitcoinstats_modules/exchanges/brazil/flowbtc');

//bulgaria
import btce = require('../bitcoinstats_modules/exchanges/bulgaria/btce');

//canada
import quadrigacx = require('../bitcoinstats_modules/exchanges/canada/quadrigacx');
import cointrader = require('../bitcoinstats_modules/exchanges/canada/cointrader');
import coinsquare = require('../bitcoinstats_modules/exchanges/canada/coinsquare');
import taurus = require('../bitcoinstats_modules/exchanges/canada/taurus');
import morrex = require('../bitcoinstats_modules/exchanges/canada/morrex');

//chile
import chilebit = require('../bitcoinstats_modules/exchanges/chile/chilebit');

//china
import vircurex = require('../bitcoinstats_modules/exchanges/china/vircurex');
import btcchina = require('../bitcoinstats_modules/exchanges/china/btcchina');
import btctrade = require('../bitcoinstats_modules/exchanges/china/btctrade');
import okcoin = require('../bitcoinstats_modules/exchanges/china/okcoin');
import bter = require('../bitcoinstats_modules/exchanges/china/bter');
import lakebtc = require('../bitcoinstats_modules/exchanges/china/lakebtc');
import huobi = require('../bitcoinstats_modules/exchanges/china/huobi');
import yunbi = require('../bitcoinstats_modules/exchanges/china/yunbi');
import chbtc = require('../bitcoinstats_modules/exchanges/china/chbtc');
import btc100 = require('../bitcoinstats_modules/exchanges/china/btc100');

//croatia
import bitkonan = require('../bitcoinstats_modules/exchanges/croatia/bitkonan');

//denmark
import hitbtc = require('../bitcoinstats_modules/exchanges/denmark/hitbtc');
import ccedk = require('../bitcoinstats_modules/exchanges/denmark/ccedk');

//france
import paymium = require('../bitcoinstats_modules/exchanges/france/paymium');

//finland
import bitalo = require('../bitcoinstats_modules/exchanges/finland/bitalo');
import localbitcoins = require('../bitcoinstats_modules/exchanges/finland/localbitcoins');

//germany
import bitcoinde = require('../bitcoinstats_modules/exchanges/germany/bitcoinde');

//greece
import btcgreece = require('../bitcoinstats_modules/exchanges/greece/btcgreece');

//hongkong
import bitfinex = require('../bitcoinstats_modules/exchanges/hongkong/bitfinex');
import gatecoin = require('../bitcoinstats_modules/exchanges/hongkong/gatecoin');

//india
import btcxindia = require('../bitcoinstats_modules/exchanges/india/btcxindia');
import coinsecure = require('../bitcoinstats_modules/exchanges/india/coinsecure');

//Indonesia
import bitcoinid = require('../bitcoinstats_modules/exchanges/indonesia/bitcoinid');

//Israel
import bit2c = require('../bitcoinstats_modules/exchanges/israel/bit2c');

//Japan
import bitflyer = require('../bitcoinstats_modules/exchanges/japan/bitflyer');
import coincheck = require('../bitcoinstats_modules/exchanges/japan/coincheck');
import zaif = require('../bitcoinstats_modules/exchanges/japan/zaif');
import quoine = require('../bitcoinstats_modules/exchanges/japan/quoine');
import btcbox = require('../bitcoinstats_modules/exchanges/japan/btcbox');

//Malta
import therocktrading = require('../bitcoinstats_modules/exchanges/malta/therocktrading');

//Mexico
import bitso = require('../bitcoinstats_modules/exchanges/mexico/bitso');
import mexbt = require('../bitcoinstats_modules/exchanges/mexico/mexbt');
import tuminium = require('../bitcoinstats_modules/exchanges/mexico/tuminium');

//netherlands
import clevercoin = require('../bitcoinstats_modules/exchanges/netherlands/clevercoin');
import bitex = require('../bitcoinstats_modules/exchanges/netherlands/bitex');
import bitonic = require('../bitcoinstats_modules/exchanges/netherlands/bitonic');
import litebit = require('../bitcoinstats_modules/exchanges/netherlands/litebit');

//new zealand
import bitnz = require('../bitcoinstats_modules/exchanges/new_zealand/bitnz');

//norway
import bitcoinsnorway = require('../bitcoinstats_modules/exchanges/norway/bitcoinsnorway');

//pakistan
import urdobit = require('../bitcoinstats_modules/exchanges/pakistan/urdobit');

//peru
import bitinka = require('../bitcoinstats_modules/exchanges/peru/bitinka');

//philippines
import btcexchange = require('../bitcoinstats_modules/exchanges/philippines/btcexchange');

//poland
import bitmarket = require('../bitcoinstats_modules/exchanges/poland/bitmarket');
import bitbay = require('../bitcoinstats_modules/exchanges/poland/bitbay');
import bitmaszyna = require('../bitcoinstats_modules/exchanges/poland/bitmaszyna');
import bitmarket24 = require('../bitcoinstats_modules/exchanges/poland/bitmarket24');
import bitorado = require('../bitcoinstats_modules/exchanges/poland/bitorado');
import bitcurex = require('../bitcoinstats_modules/exchanges/poland/bitcurex');
import bitstar = require('../bitcoinstats_modules/exchanges/poland/bitstar');

//portugal
import usecryptos = require('../bitcoinstats_modules/exchanges/portugal/usecryptos');
import zyado = require('../bitcoinstats_modules/exchanges/portugal/zyado');

//singapore
import fybsg = require('../bitcoinstats_modules/exchanges/singapore/fybsg');
import okcoin_int = require('../bitcoinstats_modules/exchanges/singapore/okcoin_int');
import bitx = require('../bitcoinstats_modules/exchanges/singapore/bitx');

//south africa
import ice3x = require('../bitcoinstats_modules/exchanges/south_africa/ice3x');

//south korea
import coinone = require('../bitcoinstats_modules/exchanges/south_korea/coinone');
import korbit = require('../bitcoinstats_modules/exchanges/south_korea/korbit');

//spain
import exmo = require('../bitcoinstats_modules/exchanges/spain/exmo');

//sweden
import fybse = require('../bitcoinstats_modules/exchanges/sweden/fybse');

//thailand
import bitcointhailand = require('../bitcoinstats_modules/exchanges/thailand/btcth');

//turkey
import btcturk = require('../bitcoinstats_modules/exchanges/turkey/btcturk');
import koinim = require('../bitcoinstats_modules/exchanges/turkey/koinim');

//united kingdom
import bitok = require('../bitcoinstats_modules/exchanges/united_kingdom/bitok');
import goc = require('../bitcoinstats_modules/exchanges/united_kingdom/goc');
import livecoin = require('../bitcoinstats_modules/exchanges/united_kingdom/livecoin');
import bit_x = require('../bitcoinstats_modules/exchanges/united_kingdom/bit-x');
import loyalbit = require('../bitcoinstats_modules/exchanges/united_kingdom/loyalbit');
import coinfloor = require('../bitcoinstats_modules/exchanges/united_kingdom/coinfloor');
import cex = require('../bitcoinstats_modules/exchanges/united_kingdom/cex');
import bitstamp = require('../bitcoinstats_modules/exchanges/united_kingdom/bitstamp');
import indacoin = require('../bitcoinstats_modules/exchanges/united_kingdom/indacoin');
import coincorner = require('../bitcoinstats_modules/exchanges/united_kingdom/coincorner');
import coinmate = require('../bitcoinstats_modules/exchanges/united_kingdom/coinmate');
import coinlink = require('../bitcoinstats_modules/exchanges/united_kingdom/coinlink');
import bitbays = require('../bitcoinstats_modules/exchanges/united_kingdom/bitbays');
import bitbargain = require('../bitcoinstats_modules/exchanges/united_kingdom/bitbargain');
import cryptonit = require('../bitcoinstats_modules/exchanges/united_kingdom/cryptonit');
import bittylicious = require('../bitcoinstats_modules/exchanges/united_kingdom/bittylicious');

//united states
import wallofcoins = require('../bitcoinstats_modules/exchanges/united_states/wallofcoins');
import monetago = require('../bitcoinstats_modules/exchanges/united_states/monetago');
import campbx = require('../bitcoinstats_modules/exchanges/united_states/campbx');
import bitquick = require('../bitcoinstats_modules/exchanges/united_states/bitquick');
import itbit = require('../bitcoinstats_modules/exchanges/united_states/itbit');
import coinbase = require('../bitcoinstats_modules/exchanges/united_states/coinbase');
import kraken = require('../bitcoinstats_modules/exchanges/united_states/kraken');
import gemini = require('../bitcoinstats_modules/exchanges/united_states/gemini');

//venezuela
import surbitcoin = require('../bitcoinstats_modules/exchanges/venezuela/surbitcoin');

//vietnam
import vbtc = require('../bitcoinstats_modules/exchanges/vietnam/vbtc');


var printExchInfos = function (exch) {
    console.log("Name: " + exch.name);
    console.log("Country: " + exch.country);
    //Volume 24hrs
    for (var i = 0; i < exch.pairs_list.length; i++) {
        console.log("Volume " + exch.pairs_list[i] + ": " + exch.volume_list[exch.pairs_list[i]]);
        //add to database
        //db_handler.insertExchangeiInDB(exch, exch.pairs_list[i],null); //callback for test
    }
}

function countDecimalPlaces(number) {
    if (Number(number) != number) {
        return -1;
    }
    var str = "" + number;
    var index = str.indexOf('.');
    if (index >= 0) {
        return str.length - index - 1;
    }
    else {
        return 0;
    }
}

//check if volume is a number, if it's higher than 0 and if have enought numbers after comma
/* Possible errors to check
    [ok]less than 0
    [ok]not a number
    4 cases after comma
 */
var testVolume = function (exch) {
    console.log("\nName: " + exch.name);
    console.log("\nCountry: " + exch.country);
    var sum = 0;
    for (var i = 0; i < exch.pairs_list.length; i++) {
        console.log("Volume " + exch.pairs_list[i] + ": " + exch.volume_list[exch.pairs_list[i]]);
        //check if is a number
        if (isNaN(exch.volume_list[exch.pairs_list[i]]) || exch.volume_list[exch.pairs_list[i]] === null) {
            assert.ok(false, "Volume " + exch.pairs_list[i] + " is not a number: " + exch.volume_list[exch.pairs_list[i]]);
        }
        //check if precision is 4
        if (countDecimalPlaces(exch.volume_list[exch.pairs_list[i]]) > 4) {
            console.log("Precision: " + countDecimalPlaces(exch.volume_list[exch.pairs_list[i]]));
            assert.ok(false, "Precision " + exch.pairs_list[i] + " > 4");
        }
        //check if volume is less than 0
        if (exch.volume_list[exch.pairs_list[i]] < 0) {
            assert.ok(false, "Volume " + exch.pairs_list[i] + " < 0");
        }
        sum += Number(exch.volume_list[exch.pairs_list[i]]);
    }
    console.log("\n\nVolume Sum: " + sum);
    assert.ok(true, "Volume ok");
}

/* Argentina */
export function WideExchange() {
    var exch = wideexchange.exch(testVolume);
}

/* Australia */
export function IndependentReserve() {
    var exch = independentreserve.exch(testVolume);
}
export function BTCMarkets() {
    var exch = btcmarkets.exch(testVolume);
}
export function BrightonPeak() {
    var exch = brightonpeak.exch(testVolume);
}

/* Barbados */
export function Bitt() {
    var exch = bitt.exch(testVolume);
}

/* Belize */
export function Exchange247() {
    var exch = exchange247.exch(testVolume);
}

/* Brazil */
export function MercadoBitcoin() {
    var exch = mercadobitcoin.exch(testVolume);
}
export function Foxbit() {
    var exch = foxbit.exch(testVolume);
}
export function NegocieCoins() {
    var exch = negociecoins.exch(testVolume);
}
export function BitcoinToYou() {
    var exch = bitcointoyou.exch(testVolume);
}
export function FlowBTC() {
    var exch = flowbtc.exch(testVolume);
}


/* Bulgaria */
export function BTCe() {
    var exch = btce.exch(testVolume);
}


/* Canada */
export function QuadrigaCX() {
    var exch = quadrigacx.exch(testVolume);
}
export function CoinTrader() {
    var exch = cointrader.exch(testVolume);
}
export function CoinSquare() {
    var exch = coinsquare.exch(testVolume);
}
export function Taurus() {
    var exch = taurus.exch(testVolume);
}
export function Morrex() {
    var exch = morrex.exch(testVolume);
}

/* Chile */
export function Chilebit() {
    var exch = chilebit.exch(testVolume);
}

/* China */
export function Vircurex() {
    var exch = vircurex.exch(testVolume);
}
export function BTCChina() {
    var exch = btcchina.exch(testVolume);
}
export function BTCTrade() {
    var exch = btctrade.exch(testVolume);
}
export function OkCoin() {
    var exch = okcoin.exch(testVolume);
}
export function Bter() {
    var exch = bter.exch(testVolume);
}
export function LakeBTC() {
    var exch = lakebtc.exch(testVolume);
}
export function Huobi() {
    var exch = huobi.exch(testVolume);
}
export function Yunbi() {
    var exch = yunbi.exch(testVolume);
}
export function ChBTC() {
    var exch = chbtc.exch(testVolume);
}
export function BTC100() {
    var exch = btc100.exch(testVolume);
}

/* Croatia */
export function BitKonan() {
    var exch = bitkonan.exch(testVolume);
}

/* Denmark */
export function HitBTC() {
    var exch = hitbtc.exch(testVolume);
}
export function CCEDK() {
    var exch = ccedk.exch(testVolume);
}

/* France */
export function Paymium() {
    var exch = paymium.exch(testVolume);
}

/* Finland */
export function Bitalo() {
    var exch = bitalo.exch(testVolume);
}
export function LocalBitcoins() {
    var exch = localbitcoins.exch(testVolume);
}

/* Germany */
export function BitcoinDE() {
    var exch = bitcoinde.exch(testVolume);
}

/* Greece */
export function BTCGreece() {
    var exch = btcgreece.exch(testVolume);
}

/* Hong Kong */
export function Bitfinex() {
    var exch = bitfinex.exch(testVolume);
}
export function Gatecoin() {
    var exch = gatecoin.exch(testVolume);
}

/* India */
export function BTCXIndia() {
    var exch = btcxindia.exch(testVolume);
}
export function Coinsecure() {
    var exch = coinsecure.exch(testVolume);
}

/* Indonesia */
export function BitcoinId() {
    var exch = bitcoinid.exch(testVolume);
}

/* Israel */
export function Bit2C() {
    var exch = bit2c.exch(testVolume);
}

/* Japan */
export function Bitflyer() {
    var exch = bitflyer.exch(testVolume);
}
export function Coincheck() {
    var exch = coincheck.exch(testVolume);
}
export function Zaif() {
    var exch = zaif.exch(testVolume);
}
export function Quoine() {
    var exch = quoine.exch(testVolume);
}
export function BTCBox() {
    var exch = btcbox.exch(testVolume);
}

/* Malta */
export function TheRockTrading() {
    var exch = therocktrading.exch(testVolume);
}

/* Mexico */
export function Bitso() {
    var exch = bitso.exch(testVolume);
}
export function MexBT() {
    var exch = mexbt.exch(testVolume);
}
export function Tuminium() {
    var exch = tuminium.exch(testVolume);
}

/* Netherlands */
export function CleverCoin() {
    var exch = clevercoin.exch(printExchInfos);
}
export function Bitex() {
    var exch = bitex.exch(printExchInfos);
}
export function Bitonic() {
    var exch = bitonic.exch(printExchInfos);
}
export function LiteBit() {
    var exch = litebit.exch(printExchInfos);
}

/* New Zealand */
export function BitNZ() {
    var exch = bitnz.exch(printExchInfos);
}

/* Norway */
export function BitcoinsNorway() {
    var exch = bitcoinsnorway.exch(printExchInfos);
}

/* Pakistan */
export function Urdobit() {
    var exch = urdobit.exch(printExchInfos);
}

/* Peru */
export function Bitinka() {
    var exch = bitinka.exch(printExchInfos);
}

/* Philippines */
export function BTCExchange() {
    var exch = btcexchange.exch(printExchInfos);
}

/* Poland */
export function BitMarket() {
    var exch = bitmarket.exch(printExchInfos);
}
export function Bitbay() {
    var exch = bitbay.exch(printExchInfos);
}
export function Bitmaszyna() {
    var exch = bitmaszyna.exch(printExchInfos);
}
export function BitMarket24() {
    var exch = bitmarket24.exch(printExchInfos);
}
export function Bitorado() {
    var exch = bitorado.exch(printExchInfos);
}
export function Bitcurex() {
    var exch = bitcurex.exch(printExchInfos);
}
export function Bitstar() {
    var exch = bitstar.exch(printExchInfos);
}

/* Portugal */
export function UseCryptos() {
    var exch = usecryptos.exch(printExchInfos);
}
export function Zyado() {
    var exch = zyado.exch(printExchInfos);
}

/* Singapore */
export function FYBSG() {
    var exch = fybsg.exch(printExchInfos);
}
export function OkCoinInt() {
    var exch = okcoin_int.exch(printExchInfos);
}
export function BitX() {
    var exch = bitx.exch(printExchInfos);
}

/* South Africa */
export function Ice3X() {
    var exch = ice3x.exch(printExchInfos);
}

/* South Korea */
export function Coinone() {
    var exch = coinone.exch(printExchInfos);
}
export function Korbit() {
    var exch = korbit.exch(printExchInfos);
}

/* Spain */
export function Exmo() {
    var exch = exmo.exch(printExchInfos);
}

/* Sweden */
export function FYBSE() {
    var exch = fybse.exch(printExchInfos);
}

/* Thailand */
export function BitcoinThailand() {
    var exch = bitcointhailand.exch(printExchInfos);
}

/* Turkey */
export function BTCTurk() {
    var exch = btcturk.exch(printExchInfos);
}
export function Koinim() {
    var exch = koinim.exch(printExchInfos);
}

/* United Kingdom */
export function Bitok() {
    var exch = bitok.exch(printExchInfos);
}
export function GOC() {
    var exch = goc.exch(printExchInfos);
}
export function LiveCoin() {
    var exch = livecoin.exch(printExchInfos);
}
export function Bit_X() {
    var exch = bit_x.exch(printExchInfos);
}
export function Loyalbit() {
    var exch = loyalbit.exch(printExchInfos);
}
export function CoinFloor() {
    var exch = coinfloor.exch(printExchInfos);
}
export function Cex() {
    var exch = cex.exch(printExchInfos);
}
export function Bitstamp() {
    var exch = bitstamp.exch(printExchInfos);
}
export function Indacoin() {
    var exch = indacoin.exch(printExchInfos);
}
export function CoinCorner() {
    var exch = coincorner.exch(printExchInfos);
}
export function CoinMate() {
    var exch = coinmate.exch(printExchInfos);
}
export function CoinLink() {
    var exch = coinlink.exch(printExchInfos);
}
export function Bitbays() {
    var exch = bitbays.exch(printExchInfos);
}
export function BitBargain() {
    var exch = bitbargain.exch(printExchInfos);
}
export function Cryptonit() {
    var exch = cryptonit.exch(printExchInfos);
}
export function Bittylicious() {
    var exch = bittylicious.exch(printExchInfos);
}

/* United States */
export function WallOfCoins() {
    var exch = wallofcoins.exch(printExchInfos);
}
export function MonetaGo() {
    var exch = monetago.exch(printExchInfos);
}
export function CampBX() {
    var exch = campbx.exch(printExchInfos);
}
export function Bitquick() {
    var exch = bitquick.exch(printExchInfos);
}
export function Itbit() {
    var exch = itbit.exch(printExchInfos);
}
export function Coinbase() {
    var exch = coinbase.exch(printExchInfos);
}
export function Kraken() {
    var exch = kraken.exch(printExchInfos);
}
export function Gemini() {
    var exch = gemini.exch(printExchInfos);
}

/* Venezuela */
export function Surbitcoin() {
    var exch = surbitcoin.exch(printExchInfos);
}

/* Vietnam */
export function VBTC() {
    var exch = vbtc.exch(printExchInfos);
}