module.exports = unique;

function unique(arr){
  var duplicate_count = [];
  var duplicate_count_minus = [];

  arr.forEach( (value) => {
    //console.log( value );
      if(value >= 0){
        duplicate_count[value] = duplicate_count[value] === undefined ? 1 : duplicate_count[value] += 1  ;
      }else{
        duplicate_count_minus[-1*value] = duplicate_count_minus[-1*value] === undefined ? 1 : duplicate_count_minus[-1*value] += 1  ;
      }
  })

  duplicate_count.forEach( (value,idx)=>{
    if( value == 1 ){
      while( arr.indexOf(idx) > -1 ){
        arr.splice(arr.indexOf(idx), 1);
      }
    }
  })

  duplicate_count_minus.forEach( (value,idx)=>{
    if( value == 1 ){
      while( arr.indexOf(-1*idx) > -1 ){
        arr.splice(arr.indexOf(-1*idx), 1);
      }
    }
  })

  return arr;
}

unique([-10,10,0] );
unique([1, 2, 3, 1, 3]);
unique([1, 2, 3, 4, 5]);
unique([5, 5, 5, 5, 5]);
unique([10, 9, 10, 10, 10,9,8]);
unique([2]);
