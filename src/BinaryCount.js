var binaryCount = (data)=> {
  let binary = Number(data).toString(2);
  let biArr = binary.split("");
  return parseInt(biArr.reduce( (total, num)=> parseInt(total)+parseInt(num) ));
}

module.exports = binaryCount;
