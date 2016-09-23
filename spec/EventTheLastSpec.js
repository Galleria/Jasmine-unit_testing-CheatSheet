var evenLast = require('../src/EvenTheLast');

describe("",()=>{

    it("should be return 0 because empty array",()=>{
      expect( evenLast([]) ).toEqual(0);
    })

    it("shoud be return 36 because sum of even idx array is 6 and final idx array is 6" ,()=>{
      expect( evenLast([6]) ).toEqual(36);
    })

    it("shoud be return 30 because sum of even idx array is 0+2+4 and final idx array is 5" ,()=>{
      expect( evenLast([0, 1, 2, 3, 4, 5]) ).toEqual(30);
    })

    it("shoud be return 30 because sum of even idx array is 1+5 and final idx array is 5" ,()=>{
      expect( evenLast([1, 3, 5]) ).toEqual(30);
    })

})
