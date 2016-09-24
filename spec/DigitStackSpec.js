var digitStack = require('../src/DigitStack')

describe( "" ,()=> {

  it("should be return 8",()=>{
    let cmd = ["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"];
    let result = 8;
    expect( digitStack(cmd) ).toEqual( result );
  })

  it("should be return 0",()=>{
    let cmd = ["POP", "POP"];
    let result = 0;
    expect( digitStack(cmd) ).toEqual( result );
  })

  it("should be return 9",()=>{
    let cmd = ["PUSH 9", "PUSH 9", "POP"];
    let result = 9;
    expect( digitStack(cmd) ).toEqual( result );
  })

  it("should be return 0",()=>{
    let cmd = [];
    let result = 0;
    expect( digitStack(cmd) ).toEqual( result );
  })

})
