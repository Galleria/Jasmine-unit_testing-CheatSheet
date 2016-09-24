var commonWords = require('../src/CommonWords')

describe("",()=>{

  it("should be return word 'hello' because hello is a common both of string ",()=>{
    let str1 = 'hello,world';
    let str2 = 'hello,earth';
    let result = 'hello';
    expect( commonWords(str1,str2) ).toEqual( result );
  })

  it("should be return '' because there is no a common both of string ",()=>{
    let str1 = 'one,two,three';
    let str2 = 'four,five,six';
    let result = '';
    expect( commonWords(str1,str2) ).toEqual( result );
  })

  it("should be return 'one,three,two' because there is a common both of string and order by wording",()=>{
    let str1 = 'one,two,three';
    let str2 = 'four,five,one,two,six,three';
    let result = 'one,three,two';
    expect( commonWords(str1,str2) ).toEqual( result );
  })

})
