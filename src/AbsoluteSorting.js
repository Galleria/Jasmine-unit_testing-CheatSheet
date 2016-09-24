var absoluteSorting = (data)=> {
  let abDataArr = data.map( (d) => Math.abs(d) );
  let sortingArr = abDataArr.sort( (a,b)=> a-b );
  let minusArr = data.filter( (d) => d < 0 );

  minusArr.forEach( (d,idx) => {
    if( sortingArr.indexOf( d*-1 ) > -1 ){
      sortingArr[ sortingArr.indexOf( d*-1 ) ] = d;
      minusArr.slice( idx , 1 );
    }
  })
  
  return sortingArr;
}

module.exports = absoluteSorting;
