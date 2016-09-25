
var recallPassword = (pattern,data)=>{
  let result = '',_pattern;

  _pattern = pattern;
  result += getPassword( _pattern , data );

  _pattern = rotateRight90(_pattern);
  result += getPassword( _pattern , data );

  _pattern = rotateRight90(_pattern);
  result += getPassword( _pattern , data );

  _pattern = rotateRight90(_pattern);
  result += getPassword( _pattern , data );

  return result ;
}

var rotateRight90 = (pattern)=>{
  let newPattern = [];
  for(let row=0; row<pattern.length ; row++){
      let newCol = '';
      for(let col=pattern[row].length-1 ; col>=0 ; col-- ){
        newCol += pattern[col][row];
      }
      newPattern.push( newCol );
  }
  return newPattern;
}

var getPassword = (pattern,data)=>{
  let password = '';
  for(let row=0; row<pattern.length ; row++){
     pattern[row].split("").forEach( (value,idx)=> {
       if( value === 'X' ){
         password += data[row][idx];
       }
     })
  }
  return password;
}

module.exports = recallPassword;
