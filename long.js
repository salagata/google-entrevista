// Primer modulo.
function longuestWord(array) {
  let long = "";
  array.forEach(str => {
    if(long.length < str.length) {
      long = str;
    }
  });
  return long;
};
// Pruebas

console.log(longuestWord(["a","bb","ccc"]));
