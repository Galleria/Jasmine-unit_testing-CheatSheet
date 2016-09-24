var morseClock = require('../src/MorseClock')

describe( "" ,()=> {

  it("should be return ",()=>{
    let time = "10:37:49";
    let morseTime = ".- .... : .-- .--- : -.. -..-";
    expect( morseClock(time) ).toEqual( morseTime );
  })


})
