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


// Exportar

module.exports.mapString = mapString

