var hammingDistance = require('../src/HammingDistance')

describe( "" , ()=> {

  it("should be return 3 as follow as 117 and 17 Hamming equal 3",()=>{
    let position = 117;
    let hamming = 17;
    let result = 3;
    expect( hammingDistance( position ,hamming ) ).toEqual( result );
  })

  it("should be return 3 as follow as 1 and 2 Hamming equal 2",()=>{
    let position = 1;
    let hamming = 2;
    let result = 2;
    expect( hammingDistance( position ,hamming ) ).toEqual( result );
  })

  it("should be return 3 as follow as 16 and 15 Hamming equal 5",()=>{
    let position = 16;
    let hamming = 15;
    let result = 5;
    expect( hammingDistance( position ,hamming ) ).toEqual( result );
  })

})
