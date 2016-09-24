var str2Arr ;
var commonWords = function(str1,str2){
  let str1Arr = str1.split(",");
   str2Arr = str2.split(",");
  let duplicateStr = str1Arr.filter( findDuplicate , str2Arr );
  return duplicateStr.sort().join();
}

var findDuplicate = (str,idx)=>{
  return str2Arr.indexOf( str ) > -1 ;
}

module.exports = commonWords;
