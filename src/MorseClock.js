var digitStack = (time)=>{
  let result = "";

  let hr = time.split(":")[0];
  let min = time.split(":")[1];
  let sec = time.split(":")[2];

  console.log( hr.toString(2) , min.toString(2) , sec.toString(2) );

  let hrArr1 = parseInt(hr.split("")[0]);
  let hrArr2 = parseInt(hr.split("")[1]);

  let minArr1 = parseInt(min.split("")[0]);
  let minArr2 = parseInt(min.split("")[1]);

  let timeArr1 = parseInt(time.split("")[0]);
  let timeArr2 = parseInt(time.split("")[1]);

  console.log( hrArr1.toString(2) , hrArr2.toString(2) , minArr1.toString(2) , minArr2.toString(2) , timeArr1.toString(2) , timeArr2.toString(2) )

  return result;
}

module.exports = digitStack;
