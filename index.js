function nextIndex(array,num) {
    let index = array.find(element => element >= num);
    return index;
}

// Pruebas

console.log(nextIndex([3,7],4));