var evenLast = function (data){
  var result;
  if( data.length==0 ){
    result = 0;
  }else{
    let sumOfEvenArr = 0;
    for( let idx=0 ; idx< data.length ; idx+=2 ){
      sumOfEvenArr += data[idx];
    }
    result = sumOfEvenArr*data[data.length-1];
  }
  return result;
}

module.exports = evenLast;
