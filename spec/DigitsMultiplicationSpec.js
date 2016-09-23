var digitsMultip = require('../src/DigitsMultiplication');

describe("",()=>{

  it("should be return 120 follow as input digits 123405 (multi is 1*2*3*4*5) exclude 0",()=>{
    let number = 123405;
    expect( digitsMultip(number) ).toEqual( 120 );
  })

  it("should be return 729 follow as input digits 999 (multi is 9*9*9) exclude 0",()=>{
    let number = 999;
    expect( digitsMultip(number) ).toEqual( 729 );
  })

  it("should be return 1 follow as input digits 1000 (multi is 1) exclude 0",()=>{
    let number = 1000;
    expect( digitsMultip(number) ).toEqual( 1 );
  })

  it("should be return 1 follow as input digits 1111 (multi is 1*1*1*1) exclude 0",()=>{
    let number = 1111;
    expect( digitsMultip(number) ).toEqual( 1 );
  })

})
