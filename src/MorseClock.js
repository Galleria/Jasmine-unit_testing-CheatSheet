var digitStack = (time)=>{
  let result = "";

  let hr = time.split(":")[0];
  let min = time.split(":")[1];
  let sec = time.split(":")[2];

  hr = ( hr.length === 1 ) ? 0+hr : hr;
  min = ( min.length === 1 ) ? 0+min : min;
  sec = ( sec.length === 1 ) ? 0+sec : sec;

  //console.log( hr , min , sec );

  // 2 4
  let hrArr1 = parseInt(hr.split("")[0]);
  let hrArr2 = parseInt(hr.split("")[1]);

  // 3 4
  let minArr1 = parseInt(min.split("")[0]);
  let minArr2 = parseInt(min.split("")[1]);

  // 3 4
  let timeArr1 = parseInt(sec.split("")[0]);
  let timeArr2 = parseInt(sec.split("")[1]);

  //console.log( hrArr1 , hrArr2 , minArr1 , minArr2 , timeArr1 , timeArr2 )
  //console.log( hrArr1.toString(2) , hrArr2.toString(2) , minArr1.toString(2) , minArr2.toString(2) , timeArr1.toString(2) , timeArr2.toString(2) )

  result += convertToMorseTime( hrArr1 , 2 );
  result += ' '
  result += convertToMorseTime( hrArr2 , 4 );

  result += ' : '
  result += convertToMorseTime( minArr1 , 3 );
  result += ' '
  result += convertToMorseTime( minArr2 , 4 );

  result += ' : '
  result += convertToMorseTime( timeArr1 , 3 );
  result += ' '
  result += convertToMorseTime( timeArr2 , 4 );

  //console.log( result );
  return result;
}

var convertToMorseTime = (time,length)=>{
  let result = time.toString(2).split("").map( (c)=> c==='1' ? '-' : '.' ).join("")
  while( result.length <length ){
    result = '.'+result;
  }
  return result;
}

module.exports = digitStack;
