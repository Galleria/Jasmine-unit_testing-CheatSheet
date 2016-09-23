const fizzBuzz = require('../src/FizzBuzz');

describe("FizzBuzz Unit Testing", ()=> {

  it("Should be return 'Fizz' when number/3 == 0 " , ()=>{
    expect( fizzBuzz(3) ).toEqual('Fizz');
  });

  it("Should be return 'Buzz' when number/5 == 0" , ()=>{
    expect( fizzBuzz(5) ).toEqual('Buzz');
  })

  it("Should be return 'numberX' when number is not 3 and 5" , ()=>{
    var num = 1 ;
    expect( fizzBuzz(num) ).toEqual( num+'' );
  })

  it("Should be return 'Fizz' when number == 6" , ()=> {
    expect( fizzBuzz(6) ).toEqual('Fizz');
  })

  it("Should be return 'Buzz' when number == 10" , ()=> {
    expect( fizzBuzz(10) ).toEqual('Buzz');
  })

  it("Should be return 'FizzBuzz' when number == 15" , ()=> {
    expect( fizzBuzz(15) ).toEqual('Fizz Buzz');
  })

})
