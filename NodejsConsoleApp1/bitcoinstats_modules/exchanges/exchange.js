/********************** Auxiliar Functions *****************************/
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

/**
    * Return the number of decimal places of a number
    * @param {Number} number - Target number
    * @returns {Number} Number of decimal places
*/
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

/********************** Get Volume List ************************/
/**
    * Implementation of exchanges call this function to get all their volumes, this function call the exchange's implementation and check if the value is a
 * number
    * @param {Exchange} exch - Object with all infos of the exchange
    * @returns {Function} callback - Function called with the result as parameter
*/
var getVolumeList = function (exch, callback) {  //callbak to main
    
    //volume array
    exch.volume_list = [];
    
    //check value and add to list
    this.assignToList = function (volume, pair) {
        //check if it's a number
        if (volume === null || volume == "") {
            volume = 0;
        }
        //check precision
        if (countDecimalPlaces(volume) > 4) {       
            volume = parseFloat(volume).toFixed(4);
        }
        //add to array
        exch.volume_list[pair.toString()] = volume;
        
        return assignVolumeList(exch, callback);
    }
    for (var i = 0; i < exch.pairs_list.length; i++) {
        this.getVolume(exch, exch.pairs_list[i], this.assignToList);
    }
};

/**
    * This function calls the callback of getVolumeList only when all volumes were retrieved
    * @param {Exchange} exch - Object with all infos of the exchange
    * @returns {Function} callback - Function called with the result as parameter
*/
var assignVolumeList = function (exch, callback) { //callback to index
    if (Object.size(exch.volume_list) == Object.size(exch.pairs_list)) {
        callback(exch);
    }
}

/********************** Exports *****************************/
exports.getVolumeList = getVolumeList;