var findMessage = function(data){
  let msg = data.split("");
  let upperCaseArr = msg.filter( (c)=> (c.charCodeAt(0) >= 65) && (c.charCodeAt(0) <= 90 ) );
  return upperCaseArr.join("");
}

module.exports = findMessage;
