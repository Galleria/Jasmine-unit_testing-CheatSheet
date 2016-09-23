var digitsMultip = function(data){
  let str = data+'';
  let multipleSum = 1;
  for( let num of str ){
    if( parseInt(num) !== 0){
      multipleSum *= parseInt(num);
    }
  }
  return multipleSum;
}

module.exports = digitsMultip;
