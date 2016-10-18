# Jasmine Guide Line (JavaScript unit testing)

there are two methods for comparing expected and actual result as below
___
- Inbuilt Matcher
- Custom Matchers
___

```javascript

//test suit
describe("",function(){

    // execute before running test suit at only once time.
    beforeAll(function(){

    })

    // will execute after running test suit have finished.
    afterAll(funtion(){

    })

    // test spec
    it("", function (){
        expect().to__();
    });

    // execute before running test spec every time.
    beforeEach(function(){

    })

    // will execute after running test spec every time.
    afterEach(function(){

    })

    // nested test suit
    describe("",function(){
        it("",function(){

        })
    })

    // disable test suit
    xdescribe("",function({

    }))

    // disable test spec
    xit("", function (){

    });

});

```
---

#Inbuilt Matcher

```javascript
expect( a ).{function( b )};
expect( a ).not.{function( b )};

--> {function()}
  toEqual();      // compare like ==
  toBe();         // compare like ===
  toMatch();      // for regular expressions
  toBeDefined();
  toBeUndefined();
  toBeNull();
  toBeNaN();
  toBeTruthy();   // check true
  toBeFalsy();    // check false
  toContain();    // check an item in an Array
  toBeLessThan(); // check value A is less than B
  toBeGreaterThan();  // check vlaue A is Greater than B
  toThrow();      // check is function throws an exception
  toThrowError("String or Regular Expression"); // check a specific thrown exception


--> b
  jasmine.any(X);  // return result is any X
    Number
    String
    Boolean
    Object
    Function

  jasmine.objectContaining(X);  // contains with object value
  jasmine.arrayContaining([Array]); // contains with array value
  jasmine.stringMatching('String'); //contains with string value

```
---

#Spy

Spy is methodology to watch object and expect something on it.
there're 3 method for spying as below
  - spyOn()
      - spy on exist object.
  - createSpy()
      - create function without implemented
  - createSpyObj()
      - create object without implemented

---
```javascript
spyOn( obj , 'function' )   
  --> obj is object as object
      'function' is function name as string

expect( obj.function ).toHaveBeenCalled();  // spy obj was called
                      .toHaveBeenCalled(x);  // spy obj was called x times
                      .toHaveBeenCalledWith( args )  // spy obj sent args specificed.
```
---
```javascript
spyOn( obj , 'function' ).and.callThrough();  
  --> obj is object as object
      'function' is function name as string   

// it will delegate (assign value) to actual implementation.    
// example

let var
foo = {
  getBar: function() {
    return bar;
  }
}
spyOn(foo, 'getBar').and.callThrough();  --> assign return value and assign to bar;

---

spyOn( obj , 'function' ).and.returnValue( x );   // return value "X" when call 'function'
spyOn(foo, "getBar").and.returnValues("first", "second");   

// return value "first" when call 'function' first time
// return value "second" when call 'function' second time
// return undefined if call more than define

---

spyOn( obj , "function").and.callFake(function(arguments, can, be, received) {
  return X;
});      

// when call this function it will call this Fake function.

---

spyOn( obj , "function").and.throwError('XXX')

// throw error when call this function.

---

// check obj in function is called already.

obj.function.calls.any()
obj.function.calls.count()

obj.function.calls.argsFor( x ) // x is round that called

  foo.setBar(123);
  foo.setBar(456, "baz");

  expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
  expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);

---

obj.function.calls.allArgs()

  foo.setBar(123);
  foo.setBar(456, "baz");

  expect(foo.setBar.calls.allArgs()).toEqual([[123],[456, "baz"]]);

---  

obj.function.calls.mostRecent()

  foo.setBar(123);
  foo.setBar(456, "baz");

  expect(foo.setBar.calls.mostRecent()).toEqual({object: foo, args: [456, "baz"], returnValue: undefined});

---

obj.function.calls.first()

  foo.setBar(123);
  foo.setBar(456, "baz");

  expect(foo.setBar.calls.first()).toEqual({object: foo, args: [123], returnValue: undefined});

---

obj.funciton.calls.all()

  foo.setBar(123);

  expect(foo.setBar.calls.all()).toEqual([{object: foo, args: [123], returnValue: undefined}]);

---

obj.function.calls.reset();   // reset all tracking for a spy.

---

  Example

  it("tracks the context", function() {
    var spy = jasmine.createSpy('spy');
    var baz = {
      fn: spy
    };
    var quux = {
      fn: spy
    };
    baz.fn(123);
    quux.fn(456);

    expect(spy.calls.first().object).toBe(baz);
    expect(spy.calls.mostRecent().object).toBe(quux);
  });

--- 
---   

createSpy('functionName')

whatAmI = jasmine.createSpy('I am function');
whatAmI("I", "am", "a", "spy");

---  

createSpyObj('objName',[functionArray])

tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);

---
```

#Custom Matchers
---
```javascript
jasmine.addMatchers({
    functionName : function(){
      Return {
        compare : function(actual,expected){
          var result = {};
          result.pass = (condition);
          result.message = 'when failed';
          return result;
        }
      }
    }
});
```

#How to use Matchers see example as below.
#Example
---
```javascript
jasmine.addMatchers ({
   validateAge: function() {
      Return {    
         compare: function(actual,expected) {
            var result = {};
            result.pass = (actual > = 13 && actual < = 19);
            result.message = 'sorry u are not a teen ';
            return result;
         }   
      };   
   }    
});
```
---
