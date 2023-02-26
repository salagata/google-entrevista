function nextIndex(array,num) {
    let index = array.find(element => element >= num);
    return index;
}

// Exportar

module.exports.nextIndex = nextIndex