var breakRings = function( data ){
  var rings = data;
  let round=0 ;

  while( rings.length > 0 ){
    let depenRings = [];
    depenRings[0] = 0;

    // check ring is only one
    if( rings.length === 1 ){
      if( rings[0].length === 1 ){
        break;
      }
    }

    // count maximum dependent ring
    for( let ring of rings ){
      for( let number of ring ){
        depenRings[ number ] = ( depenRings[ number ] === undefined ? 1 : depenRings[ number ] += 1 ) ;
      }
    }

    // insert null dependent ring to 0
    for( let idx=0 ; idx< depenRings.length ; idx++ ){
        depenRings[ idx ] = ( depenRings[ idx ] === undefined ? 0 : depenRings[ idx ] ) ;
    }

    let maxDuplicateValue = Math.max(...depenRings);
    let number = depenRings.indexOf(maxDuplicateValue);

    // get all position that duplicate ring
    let maxDuplicateArr = [];
    depenRings.forEach(function(value, pos) {
      if( value === maxDuplicateValue )
        maxDuplicateArr.push( pos );
    });

    let maxSecondDuplicateValue = depenRings.sort( (a,b)=> { b-a })[1];
    if( maxDuplicateValue ===3 && maxSecondDuplicateValue === 2 ){
      number = depenRings.indexOf(maxSecondDuplicateValue);
    }

    // cut off duplicate value ring
    if( maxDuplicateArr.length > 1 ){
      for( let ring of rings ){
        let isDuplicateBoth = 0;

        for( let sameDuplicate of maxDuplicateArr ){
          if( ring.indexOf(sameDuplicate) > -1 ){
            isDuplicateBoth++;
          }
        }

        if( isDuplicateBoth === 2 ){
          maxDuplicateArr.splice( 0 , 1);
          number = maxDuplicateArr[0];
        }
      }
    }

    //cut off maximum dependent ring from rings array.
    //console.log( rings );
    for( let ring of rings ){
        let position = ring.indexOf( number );
        if( position >= 0 ){
          ring.splice( position , 1);
          if( ring.length == 0 ){
            rings.splice(rings.indexOf(ring), 1);
          }
      }
    }
    //console.log( rings );

    //cut off seperate rings from rings array.
    //console.log( rings );
    for( let idx=0 ; idx<rings.length ; idx++ ){
      let ring = rings[idx];
      if( ring.length <= 1 ){
        rings.splice(rings.indexOf(ring), 1);
        idx=-1;
      }
    }
    //console.log( rings );

    round++;
  }
  return round;
}

console.log( breakRings([[1,2],[2,3],[3,4],[4,5],[4,6],[6,5]]) )   //3
console.log( breakRings([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 6]] ) )   //3
console.log( breakRings([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]) )    //3
console.log( breakRings([[5, 6], [4, 5], [3, 4], [3, 2], [2, 1], [1, 6]] ) )   //3
console.log( breakRings([[8, 9], [1, 9], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7]]) )  //5
console.log( breakRings([[6,1],[6,5]])  )    //1
console.log( breakRings([[6,1]])  )    //1
console.log( breakRings( [[9]] ) )   //0
console.log( breakRings( [[1,9],[1,2],[8,5],[4,6],[5,6],[8,1],[3,4],[2,6],[9,6],[8,4],[8,3],[5,7],[9,7],[2,3],[1,7]] ) )   //5
console.log( breakRings( [[3,4],[5,6],[2,7],[1,5],[2,6],[8,4],[1,7],[4,5],[9,5],[2,3],[8,2],[2,4],[9,6],[5,7],[3,6],[1,3]] ) )   //5
console.log( breakRings([[1,2],[2,3],[3,4],[4,5],[5,2],[1,6],[6,7],[7,8],[8,9],[9,6],[1,10],[10,11],[11,12],[12,13],[13,10],[1,14],[14,15],[15,16],[16,17],[17,14]]) ); // 8
