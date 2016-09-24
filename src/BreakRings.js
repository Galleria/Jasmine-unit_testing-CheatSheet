var breakRing = function( data ){
  var rings = data;
  let round=0 ;

  while( rings.length > 0 ){
    let depenRings = [];
    depenRings[0] = 0;

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

    console.log( depenRings );
    console.log( "Position at ", depenRings.indexOf(Math.max(...depenRings)) )

    let maxPosition = Math.max(...depenRings);
    let same = [];
    depenRings.forEach(function(value, pos) {
      if( value == maxPosition )
        same.push( pos );
    });
    //console.log( maxPosition )
    //console.log( same )

    for( let ring of rings ){
      console.log( same,ring);
      for( let number=0 ; number<=same-1 ; number++ ){
        console.log( same[number] );
        if( ring.indexOf( same[number] ) >= 0 ){
          if( ring.indexOf( same[number] ) == 0 ){
            if( ring[1] == same[number+1]){
              console.log("same", ring );
              break;
            }
          }else if( ring.indexOf(number) == 1 ){
            if( ring[0] == same[number+1]){
              console.log("same", ring );
              break;
            }
          }
        }
      }
    }

    //cut off maximum dependent ring from rings array.
    //console.log( rings );
    for( let ring of rings ){
        let position = ring.indexOf( depenRings.indexOf(maxPosition) );
        //console.log( position );
        if( position >= 0 ){
          //console.log( ring );
          ring.splice( position , 1);
          if( ring.length == 0 ){
            rings.splice(rings.indexOf(ring), 1);
          }
      }
      //console.log( ring );
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

    //console.log( round );
    round++;

  }
  return round;
}

/*
console.log( breakRing([[1,2],[2,3],[3,4],[4,5],[4,6],[6,5]]) )   //3
console.log( breakRing([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 6]] ) )   //3
console.log( breakRing([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]) )    //3
console.log( breakRing([[5, 6], [4, 5], [3, 4], [3, 2], [2, 1], [1, 6]] ) )   //3
console.log( breakRing([[8, 9], [1, 9], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7]]) )  //5
console.log( breakRing([[6,1],[6,5]])  )    //1
console.log( breakRing([[6,1]])  )    //1
console.log( breakRing( [[9]] ) )   //0
*/
console.log( breakRing( [[1,9],[1,2],[8,5],[4,6],[5,6],[8,1],[3,4],[2,6],[9,6],[8,4],[8,3],[5,7],[9,7],[2,3],[1,7]] ) )   //5
