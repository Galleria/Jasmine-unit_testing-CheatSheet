var threeWords = require('../src/ThreeWord');

describe("",()=>{

  it("should be return True because message contains abrove or equal 3 word 'Hello World hello'",()=>{
    let message = "Hello World hello";
    expect( threeWords(message) ).toEqual( true );
  })

  it("should be return False because message contains 3 word and 2 word 'He is 123 man'",()=>{
    let message = "He is 123 man";
    expect( threeWords(message) ).toEqual( false );
  })

  it("should be return False because message doesn't contain word",()=>{
    let message = "1 2 3 4";
    expect( threeWords(message) ).toEqual( false );
  })

  it("should be return True because message contains only 3 word bla bla bla bla",()=>{
    let message = "bla bla bla bla";
    expect( threeWords(message) ).toEqual( true );
  })

  it("should be return False because message contains only 2 word Hi",()=>{
    let message = "Hi";
    expect( threeWords(message) ).toEqual( false );
  })

  it("should be return False because message contains only 2 word Hi",()=>{
    let message = "start 5 one two three 7 end";
    expect( threeWords(message) ).toEqual( true );
  })

  it("should be return False because message contains only 2 word Hi",()=>{
    let message = "one two 3 four five 6 seven eight 9 ten eleven 12";
    expect( threeWords(message) ).toEqual( false );
  })

  it("should be return False because message contains only 2 word Hi",()=>{
    let message = "one two 3 four 5 six 7 eight 9 ten eleven 12";
    expect( threeWords(message) ).toEqual( false );
  })

  it("should be return False because message contains only 2 word Hi",()=>{
    let message = "one two 3 four five six 7 eight 9 ten eleven 12";
    expect( threeWords(message) ).toEqual( true );
  })



/*
  it("",()=>{
    let message = "";
    expect( threeWords(message) ).toEqual('');
  })
  */
})
