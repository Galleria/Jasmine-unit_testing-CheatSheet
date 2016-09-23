var findMessage = require('../src/SecretMessage');

describe("",()=>{

  it("should be return HELLO because message 'is How are you? Eh, ok. Low or Lower? Ohhh.'' that does have uppercase",()=>{
    let message = "How are you? Eh, ok. Low or Lower? Ohhh.";
    expect( findMessage(message) ).toEqual('HELLO');
  })

  it("should be return '' because message is hello world! that doesn't have uppercase",()=>{
    let message = "hello world!";
    expect( findMessage(message) ).toEqual('');
  })
})
