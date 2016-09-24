var digitStack = (cmds) => {
  let result = 0;
  let stack = [];
  cmds.forEach( (cmd,idx)=> {
    switch( cmd.split(" ")[0] ){
      case 'PUSH':
            stack.push( parseInt(cmd.split(" ")[1]) );
      break;
      case 'POP':
            if( stack.length > 0 ){
              result += stack[stack.length - 1];
            }
            stack.pop();
      break;
      case 'PEEK':
            if( stack.length > 0 ){
              result += stack[stack.length - 1];
            }
      break;
    }
  })
  return result;
}

module.exports = digitStack;
