module.exports = unique;

function unique(arr){
  var duplicate_count = [];

  arr.forEach( (value) => {
    duplicate_count[value] =  duplicate_count[value] === undefined ? 1 : duplicate_count[value] += 1  ;
  })

  duplicate_count.forEach( (value,idx)=>{
    if( value == 1 ){
      while( arr.indexOf(idx) > -1 ){
        arr.splice(arr.indexOf(idx), 1);
      }
    }
  })

  return arr;
}

unique([1, 2, 3, 1, 3]);
unique([1, 2, 3, 4, 5]);
unique([5, 5, 5, 5, 5]);
unique([10, 9, 10, 10, 10,9,8]);
unique([2]);
