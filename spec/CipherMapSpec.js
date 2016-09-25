var recallPassword = require( '../src/CipherMap' )

describe( "" , ()=> {

  it("should be return icantforgetiddqd",()=>{
    let pattern =    ['X...',
                   '..X.',
                   'X..X',
                   '....'];
    let data =  ['itdf',
                    'gdce',
                    'aton',
                    'qrdi'];
    let result = 'icantforgetiddqd';
    expect( recallPassword(pattern,data) ).toEqual( result );
  })

  it("should be return icantforgetiddqd",()=>{
    let pattern = ['....',
                   'X..X',
                   '.X..',
                   '...X']
    let data = ['xhwc',
                'rsqx',
                'xqzz',
                'fyzr'];
    let result = 'rxqrwsfzxqxzhczy';
    expect( recallPassword(pattern,data) ).toEqual( result );
  })

})
