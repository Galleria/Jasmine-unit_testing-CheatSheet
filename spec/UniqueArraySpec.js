const uniqueArray = require('../src/UniqueArray');

describe("Remove Unique Array", ()=>{

  it("should be remove 2 in array because 2 is only one in array",()=>{
      expect( uniqueArray([2]) ).toEqual([]);
  })

  it("should be return same array because 2 are at least one in array",()=>{
      expect( uniqueArray([2,2]) ).toEqual([2,2]);
  })

  it("should be return [2,2] array because 2 are at least one but 1 is unique in array",()=>{
      expect( uniqueArray([2,1,2]) ).toEqual([2,2]);
  })

  it("should be return empty array because it is unique in array",()=>{
      expect( uniqueArray([7,1,2]) ).toEqual([]);
  })

})
