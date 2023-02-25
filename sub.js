// Modulos
function nextIndex(array,num) {
    let index = array.find(element => element >= num);
    return index;
};

function mapString(str) {
    let map = {};
    for (let i = 0; i<str.length; i++) {
        let letter = str[i];
        if (map[letter]) {
            map[letter].push(i);
        } else {
            map[letter] = [i];
        }
    }
    return map;
}

// Funcion
function sameLetters(str,word) {
    let etring = mapString(str);
    for (const letter of word) {
        if (etring[letter]&& etring[letter].length != 0 ) {
            etring[letter].shift()
        } else {
            return false;
        }
    }
    return true


}
console.log(sameLetters('samos','sas'));