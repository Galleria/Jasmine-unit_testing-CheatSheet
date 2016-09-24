var hammingDistance = (data,distance)=>{
  return parseInt(( data ^ distance).toString(2)
                        .split("")
                        .reduce( (total,number)=> number > 0 ? parseInt(total)+1 : total ));
}

module.exports = hammingDistance;
