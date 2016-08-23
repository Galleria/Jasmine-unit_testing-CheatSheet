var housePassword = require('../src/HousePassword');

describe( "house password checker , it check password safe (true) or unsafe (false) \n"+
          "password safe when => \n"+
          " - contains letters and digits olny \n"+
          " - at least 1 digit \n"+
          " - at least 1 uppercase \n"+
          " - at least 1 lowercase \n"+
          " - greater than 10 \n", ()=>{

    it("should be return true because password contains letters and digits olny" , ()=>{
        expect( housePassword("abc123ABCD") ).toEqual( true );
    })

    it("should be return false because password doesn't contains letters and digits olny" , ()=>{
        expect( housePassword("abc123ABC/*") ).toEqual( false );
    })

    it("should be return true because password is greater than 10" , ()=>{
        expect( housePassword("abc123ABCD") ).toEqual( true );
    })

    it("should be return false because password is lower than 10" , ()=>{
        expect( housePassword("abc123ABC") ).toEqual( false );
    })

    it("should be return true because password contains at least 1 uppercase" , ()=>{
        expect( housePassword("abc123456D") ).toEqual( true );
    })

    it("should be return false because password doesn't contains at least 1 uppercase" , ()=>{
        expect( housePassword("abc123456d") ).toEqual( false );
    })

    it("should be return true because password contains at least 1 lowercase" , ()=>{
        expect( housePassword("ABC123456d") ).toEqual( true );
    })

    it("should be return false because password doesn't contains at least 1 lowercase" , ()=>{
        expect( housePassword("ABC123456D") ).toEqual( false );
    })

    it("should be return true because password contains at least 1 digit" , ()=>{
        expect( housePassword("AbCDEFGHI1") ).toEqual( true );
    })

    it("should be return false because password doesn't contains at least 1 digit" , ()=>{
        expect( housePassword("AbCDEFGHIJ") ).toEqual( false );
    })
})
