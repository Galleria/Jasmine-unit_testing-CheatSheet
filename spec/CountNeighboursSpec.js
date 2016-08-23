var count_neighbours = require('../src/CountNeighbours');

describe("count neighbours around your chip \n" +
        "input : \n"+
        " - square : array 2 dimitions 3 <= len <= 10 \n"+
        " - x : int \n"+
        " - y : int \n" , ()=>{

  it("should be return 3",()=>{
    result = count_neighbours(
                              [[1, 0, 0, 1, 0],
                              [0, 1, 0, 0, 0],
                              [0, 0, 1, 0, 1],
                              [1, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0]],
                              1,
                              2);
     expect( result ).toEqual( 3 );
  })

  it("should be return 1",()=>{
    result = count_neighbours(
                              [[1, 0, 0, 1, 0],
                              [0, 1, 0, 0, 0],
                              [0, 0, 1, 0, 1],
                              [1, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0]],
                              0,
                              0);
     expect( result ).toEqual( 1 );
  })

  it("should be return 0",()=>{
    result = count_neighbours(
                              [[1, 0, 0, 1, 0],
                              [0, 1, 0, 0, 0],
                              [0, 0, 1, 0, 1],
                              [1, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0]],
                              4,
                              4);
     expect( result ).toEqual( 0 );
  })

})
