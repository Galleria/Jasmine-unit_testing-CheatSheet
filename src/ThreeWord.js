
var threeWords = function(data){
  let msg = data.split(" ");
  let isThreeWords = 0;
  for( let str of msg ){

    isThreeWords = ( ! isNumber(str) ) ? isThreeWords+1 : 0;

    if( isThreeWords >=3 ){
      break;
    }
  }
  return ( isThreeWords >=3 ) ? true : false;
}

var isNumber = function(sentence){
  let msg = sentence.split("");
  let numberArr = msg.filter( (c)=> (c.charCodeAt(0) >= 48) && (c.charCodeAt(0) <= 57 ) )
  return (numberArr.length > 0 ) ? true : false;
}

module.exports = threeWords;
