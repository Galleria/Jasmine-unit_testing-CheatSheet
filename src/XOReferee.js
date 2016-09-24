var xoReferee = function(xoTable){
  let arr = ["X","O"];
  for( let ch of arr ){
    let win = 0;
    win += finWinnerHorizontal(xoTable,ch);
    win += finWinnerVertical(xoTable,ch);
    win += findWinnerInclineForWard(xoTable,ch);
    win += findWinnerInclineBackWard(xoTable,ch);
    if( win >= 1 ){
      return ch;
    }
  }
  return "D";
}

var findWinner  = function( rc ,char ){
  var reg = new RegExp(char,"g");
  return rc.replace( reg,"" ).length == 0 ? 1 : 0;
}

var findWinnerInclineForWard  = function( xoTable , ch){
  let row= "";
  for( let cols=0 ; cols<3 ; cols++ ){
    row += xoTable[cols][cols];
  }
  console.log( row );
  return findWinner( row , ch );
}

var findWinnerInclineBackWard  = function( xoTable , ch ){
  let row= "";
  let rows = 0;
    for( let cols=2 ; cols>=0 ; cols-- ){
      row += xoTable[rows++][cols];
  }
  //console.log( row );
  return findWinner( row , ch );
}

var finWinnerVertical = function( xoTable , ch ){
  let winner = 0;
  for( let cols=0 ; cols<3 ; cols++ ){
    let row= "";
    for( let rows=0 ; rows<3 ; rows++ ){
      row += xoTable[rows][cols];
    }
    //console.log( row );
    winner+= findWinner( row ,ch  );
  }
  return winner;
}

var finWinnerHorizontal = function( xoTable , ch ){
  let winner = 0;
  for( let rows=0 ; rows<3 ; rows++ ){
    winner+= findWinner( xoTable[rows] ,ch );
  }
  return winner;
}

//console.log( finWinnerHorizontal( "000" ,0) );
/*
console.log ( xoReferee([
    "X.O",
    "XX.",
    "XOO"])
)

console.log( xoReferee([
    "OO.",
    "XOX",
    "XOX"])
)

console.log( xoReferee([
    "OOX",
    "XXO",
    "OXX"])
)
*/

console.log( xoReferee(["OXO","XOX","OXO"])
)
/*
console.log( xoReferee([
        "O.X",
        "XX.",
        "XOO"] )
)
*/
