
median = function(arr){
  arrs = arr.sort( (a,b) => {return a-b} );
  len = arrs.length/2;
  return ( arrs.length%2 == 1 ) ?
            arrs[len - 0.5]
            : 
            (arrs[len-1] + arrs[len]) / 2 ;
}

module.exports = median;
