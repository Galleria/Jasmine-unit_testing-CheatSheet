var brackets = (data)=> {
  let tags = ['()','{}','[]']

  let dataArr = data.split("");
  dataArr = dataArr.filter( filterCmd );
  dataArr = dataArr.join("");

  while( true ){
    let isFound = false;

    for( let idx = 0 ; idx< tags.length ; idx++ ){
      if( dataArr.length>0 && dataArr.indexOf( tags[idx] ) > -1 ){
        dataArr = replaceCmd( dataArr , idx );
        isFound = true;
        break;
      }
    }
    if( ! isFound ){
      break;
    }
  }

  return ( dataArr.length == 0 ) ? true : false;
}

var filterCmd = ( ch )=>{
  let cmd = ['(','{','[',')','}',']'];
  let isFound = false;
  cmd.forEach( (c)=> {
    if( c == ch) {
      isFound = true;
    }
  })
  return isFound ? ch : false;
}

var replaceCmd = (str , idx)=> {
  switch ( idx ) {
    case 0:
      str = str.replace( /\(\)/g,"");
      break;
    case 1:
      str = str.replace( /\{\}/g,"");
      break;
    case 2:
      str = str.replace( /\[\]/g,"");
      break;
  }
  return str;
}

module.exports = brackets;
