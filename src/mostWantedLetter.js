var mostWantedLetter = function(word){
  let lowerWord = word.toLowerCase().trim().replace(" ","");
  let charArr = [];
  let charA = 97;
  let charZ = 122;

  for(let idx=0 ; idx<= (charZ-charA) ;idx++){
    charArr[idx] = 0;
  }

  for( let ch of lowerWord ){
    let ascii = ch.charCodeAt();
    if( ascii >= charA && ascii <= charZ ){
      charArr[ ascii - charA ]++;
    }
  }

  return String.fromCharCode( charArr.indexOf(Math.max(...charArr))+charA )
}

module.exports = mostWantedLetter;
