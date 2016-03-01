var Currencies = require("./currency");

/**
     * CurrencyPair Object
     * @param {Currencies} basePair - base currency object
     * @param {Currencies} counterPair - counter currency object
     * @returns {CurrencyPair} CurrencyPair object
*/
function CurrencyPair(basePair, counterPair) {
    this.basePair = basePair;
    this.counterPair = counterPair;
    
    /**
     * Get the current value of the tag.
     * @returns {String} Return a concatenation of the pairs separated by underline
    */
    this.toString = function () {
        return this.basePair + "_" + this.counterPair;
    };

}
/**
     * Return a Currency pair object with both currencies
*/
module.exports = {
    BTC_BRL: new CurrencyPair(Currencies.BTC, Currencies.BRL),
    LTC_BRL: new CurrencyPair(Currencies.LTC, Currencies.BRL),
    
    BTC_VND: new CurrencyPair(Currencies.BTC, Currencies.VND),
    BTC_IDR: new CurrencyPair(Currencies.BTC, Currencies.IDR),
    BTC_COP: new CurrencyPair(Currencies.BTC, Currencies.COP),
    BTC_PHP: new CurrencyPair(Currencies.BTC, Currencies.PHP),
    BTC_INR: new CurrencyPair(Currencies.BTC, Currencies.INR),
    BTC_MXN: new CurrencyPair(Currencies.BTC, Currencies.MXN),
    BTC_KES: new CurrencyPair(Currencies.BTC, Currencies.KES),
    BTC_NAD: new CurrencyPair(Currencies.BTC, Currencies.NAD),
    BTC_VEF: new CurrencyPair(Currencies.BTC, Currencies.VEF),
    
    BTC_EGP: new CurrencyPair(Currencies.BTC, Currencies.EGP),
    BTC_BMD: new CurrencyPair(Currencies.BTC, Currencies.BMD),
    BTC_JMD: new CurrencyPair(Currencies.BTC, Currencies.JMD),
    BTC_TTD: new CurrencyPair(Currencies.BTC, Currencies.TTD),
    BTC_HRK: new CurrencyPair(Currencies.BTC, Currencies.HRK),
    BTC_QAR: new CurrencyPair(Currencies.BTC, Currencies.QAR),
    BTC_MYR: new CurrencyPair(Currencies.BTC, Currencies.MYR),
    BTC_AED: new CurrencyPair(Currencies.BTC, Currencies.AED),
    BTC_SAR: new CurrencyPair(Currencies.BTC, Currencies.SAR),
    BTC_KZT: new CurrencyPair(Currencies.BTC, Currencies.KZT),
    BTC_TRY: new CurrencyPair(Currencies.BTC, Currencies.TRY),
    BTC_PEN: new CurrencyPair(Currencies.BTC, Currencies.PEN),
    BTC_RON: new CurrencyPair(Currencies.BTC, Currencies.RON),
    BTC_TWD: new CurrencyPair(Currencies.BTC, Currencies.TWD),
    BTC_HUF: new CurrencyPair(Currencies.BTC, Currencies.HUF),
    BTC_PKR: new CurrencyPair(Currencies.BTC, Currencies.PKR),
    BTC_BOB: new CurrencyPair(Currencies.BTC, Currencies.BOB),
    BTC_BGN: new CurrencyPair(Currencies.BTC, Currencies.BGN),
    BTC_MUR: new CurrencyPair(Currencies.BTC, Currencies.MUR),
    
    // Provide some courtesy BTC major symbols
    BTC_USD: new CurrencyPair(Currencies.BTC, Currencies.USD),
    BTC_GBP: new CurrencyPair(Currencies.BTC, Currencies.GBP),
    BTC_EUR: new CurrencyPair(Currencies.BTC, Currencies.EUR),
    BTC_JPY: new CurrencyPair(Currencies.BTC, Currencies.JPY),
    BTC_CHF: new CurrencyPair(Currencies.BTC, Currencies.CHF),
    BTC_AUD: new CurrencyPair(Currencies.BTC, Currencies.AUD),
    BTC_ARS: new CurrencyPair(Currencies.BTC, Currencies.ARS),
    BTC_CAD: new CurrencyPair(Currencies.BTC, Currencies.CAD),
    BTC_CLP: new CurrencyPair(Currencies.BTC, Currencies.CLP),
    BTC_CNY: new CurrencyPair(Currencies.BTC, Currencies.CNY),
    BTC_DKK: new CurrencyPair(Currencies.BTC, Currencies.DKK),
    BTC_HKD: new CurrencyPair(Currencies.BTC, Currencies.HKD),
    BTC_NZD: new CurrencyPair(Currencies.BTC, Currencies.NZD),
    BTC_PLN: new CurrencyPair(Currencies.BTC, Currencies.PLN),
    BTC_RUB: new CurrencyPair(Currencies.BTC, Currencies.RUB),
    BTC_SEK: new CurrencyPair(Currencies.BTC, Currencies.SEK),
    BTC_SGD: new CurrencyPair(Currencies.BTC, Currencies.SGD),
    BTC_NOK: new CurrencyPair(Currencies.BTC, Currencies.NOK),
    BTC_THB: new CurrencyPair(Currencies.BTC, Currencies.THB),
    BTC_RUR: new CurrencyPair(Currencies.BTC, Currencies.RUR),
    BTC_ZAR: new CurrencyPair(Currencies.BTC, Currencies.ZAR),
    BTC_NGN: new CurrencyPair(Currencies.BTC, Currencies.NGN),
    BTC_BBD: new CurrencyPair(Currencies.BTC, Currencies.BBD),

    
    BTC_CZK: new CurrencyPair(Currencies.BTC, Currencies.CZK),
    BTC_ILS: new CurrencyPair(Currencies.BTC, Currencies.ILS),
    BTC_KRW: new CurrencyPair(Currencies.BTC, Currencies.KRW),
    BTC_LTC: new CurrencyPair(Currencies.BTC, Currencies.LTC),
    BTC_XRP: new CurrencyPair(Currencies.BTC, Currencies.XRP),
    BTC_NMC: new CurrencyPair(Currencies.BTC, Currencies.NMC),
    BTC_XVN: new CurrencyPair(Currencies.BTC, Currencies.XVN),
};