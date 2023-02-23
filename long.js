// Primer modulo.
function longuestWord(array) {
  let long = "";
  array.forEach(str => {
    if(long.lenght < str.lenght) {
      long = str;
    }
  });
  return long;
};
module.exports = {
  
};
module.exports["longuestWord"] = longuestWord;
