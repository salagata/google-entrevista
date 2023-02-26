// Modulos
var nextIndex = require("./index")

var mapString = require("./map")

// Funcion
function sameLetters(wordu,strlo) {
    let etring = mapString.mapString(strlo);
    for (const letter of wordu) {
        if (etring[letter] && etring[letter].length != 0 ) {
            etring[letter].shift()
        } else {
            return false;
        }
    }
    return true


}
console.log(mapString.mapString('hullaballoo'));
console.log(sameLetters('sass','samos'));