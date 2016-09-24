var translate = require('../src/BirdLanguage');

describe( "" ,()=>{

    it("should be return 'hello' from msg 'hieeelalaooo'",()=>{
      let msg = 'hieeelalaooo';
      let result = 'hello';
      expect( translate(msg) ).toEqual( result );
    })

    it("should be return 'how you doin' from msg 'hoooowe yyyooouuu duoooiiine'",()=>{
      let msg = 'hoooowe yyyooouuu duoooiiine';
      let result = 'how you doin';
      expect( translate(msg) ).toEqual( result );
    })

    it("should be return 'how you doin' from msg 'aaa bo cy da eee fe'",()=>{
      let msg = 'aaa bo cy da eee fe';
      let result = 'a b c d e f';
      expect( translate(msg) ).toEqual( result );
    })

    it("should be return 'sos aaa' from msg 'sooooso aaaaaaaaa'",()=>{
      let msg = 'sooooso aaaaaaaaa';
      let result = 'sos aaa';
      expect( translate(msg) ).toEqual( result );
    })
    
})
