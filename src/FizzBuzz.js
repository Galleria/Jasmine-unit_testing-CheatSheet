
function cal(num){
  var result = '';

  if( ( num%3 != 0 ) && ( num%5 != 0 ) ){
    result = num;
  }else{
    result += ( num%3==0 ) ? 'Fizz' : '';
    result += ( num%5==0 ) ? 'Buzz' : '';
  }

  return result;
}

module.exports = cal;
