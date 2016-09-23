
function fizzBuzz(num){
  let result = '';

  if( ( num%3 != 0 ) && ( num%5 != 0 ) ){
    result = num+'';
  }else{
    result += ( num%3==0 ) ? 'Fizz' : '';
    result += (result.length >0 && num%5==0) ? ' ' : '';
    result += ( num%5==0 ) ? 'Buzz' : '';
  }

  return result;
}


module.exports = fizzBuzz;
