var brackets = require( '../src/Brackets' )

describe( "" , ()=> {

  it("should be return true because it correct format",()=>{
    let stack = "((5+3)*2+1)";
    expect( brackets(stack) ).toBeTruthy();
  })

  it("should be return true because it correct format",()=>{
    let stack = "{[(3+1)+2]+}";
    expect( brackets(stack) ).toBeTruthy();
  })

  it("should be return false because it incorrect format",()=>{
    let stack = "(3+{1-1)}";
    expect( brackets(stack) ).toBeFalsy();
  })

  it("should be return true because it correct format",()=>{
    let stack = "[1+1]+(2*2)-{3/3}";
    expect( brackets(stack) ).toBeTruthy();
  })

  it("should be return true because it incorrect format",()=>{
    let stack = "(({[(((1)-2)+3)-3]/3}-3)";
    expect( brackets(stack) ).toBeFalsy();
  })

  it("should be return true because it correct format",()=>{
    let stack = "2+3";
    expect( brackets(stack) ).toBeTruthy();
  })

})
