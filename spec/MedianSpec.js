const median = require('../src/Median');

describe("Median Unit Testing", ()=> {

  it("Should be return 2 because 2 is median in [1,2,3]",()=>{
      expect( median( [1,2,3] ) ).toEqual( 2 );
  })

  it("Should be return 3 because 3 is median in [1,2,3,4,5]",()=>{
      expect( median( [1,2,3,4,5] ) ).toEqual( 3 );
  })

  it("Should be return 3 because 3 is median in [3,1,2,5,3]",()=>{
      expect( median( [3,1,2,5,3] ) ).toEqual( 3 );
  })

  it("Should be return 12.5 because 15 and 20 are median in [3,6,20,99,10,15]",()=>{
      expect( median( [3,6,20,99,10,15] ) ).toEqual( 12.5 );
  })


})
