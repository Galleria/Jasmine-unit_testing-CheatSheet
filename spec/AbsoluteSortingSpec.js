var absoluteSorting = require('../src/AbsoluteSorting');

describe("",()=>{

  it("should be return absolute sorting array like this [-5, 10, 15, -20]",()=>{
    let arr = [-20, -5, 10, 15];
    let result = [-5, 10, 15, -20];
    expect( absoluteSorting(arr) ).toEqual(result);
  })

  it("should be return absolute sorting array like this [0, 1, 2, 3]",()=>{
    let arr = [1, 2, 3, 0];
    let result = [0, 1, 2, 3];
    expect( absoluteSorting(arr) ).toEqual(result);
  })

  it("should be return absolute sorting array like this [0, -1, -2, -3]",()=>{
    let arr = [-1, -2, -3, 0];
    let result = [0, -1, -2, -3];
    expect( absoluteSorting(arr) ).toEqual(result);
  })

})
