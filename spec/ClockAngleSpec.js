var clockAngle = require( '../src/ClockAngle' )

describe( "" , ()=> {

  it("should be return 105 degree",()=>{
    let time = "02:30";
    let result = 105
    expect( clockAngle(time) ).toEqual( result );
  })

  it("should be return 159 degree",()=>{
    let time = "13:42";
    let result = 159
    expect( clockAngle(time) ).toEqual( result );
  })

  it("should be return 153.5 degree",()=>{
    let time = "01:43";
    let result = 153.5
    expect( clockAngle(time) ).toEqual( result );
  })

  it("should be return 5.5 degree",()=>{
    let time = "12:01";
    let result = 5.5
    expect( clockAngle(time) ).toEqual( result );
  })

  it("should be return 180 degree",()=>{
    let time = "18:00";
    let result = 180
    expect( clockAngle(time) ).toEqual( result );
  })



})
