var translate = (data)=>{
  let vowelsLetter = ['a','e','i','o','u','y'];
  let dataArr = data.split("");
  let msg = "";

  for( let idx= 0 ; idx<dataArr.length ; idx++ ){
    msg+= dataArr[idx];
    if( dataArr[idx].trim().length > 0 ){
      let isVoWel = vowelsLetter.filter( (letter)=> letter === dataArr[idx] ).toString().length === 1 ;
      if( isVoWel ){
        idx+=2;
      }else{
        idx++;
      }
    }
  }
  return msg;
}

module.exports = translate;
