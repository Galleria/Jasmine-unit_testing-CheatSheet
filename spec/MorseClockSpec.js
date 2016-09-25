var morseClock = require('../src/MorseClock')

describe( "" ,()=> {

  it("10:37:49 should be return ",()=>{
    let time = '10:37:49';
    let morseTime = '.- .... : .-- .--- : -.. -..-';
    expect( morseClock(time) ).toEqual( morseTime );
  })

  it("21:34:56 should be return ",()=>{
    let time = '21:34:56';
    let morseTime = '-. ...- : .-- .-.. : -.- .--.';
    expect( morseClock(time) ).toEqual( morseTime );
  })

  it("00:1:02 should be return ",()=>{
    let time = '00:1:02';
    let morseTime = '.. .... : ... ...- : ... ..-.';
    expect( morseClock(time) ).toEqual( morseTime );
  })

  it("23:59:59 should be return ",()=>{
    let time = '23:59:59';
    let morseTime = '-. ..-- : -.- -..- : -.- -..-';
    expect( morseClock(time) ).toEqual( morseTime );
  })


})
