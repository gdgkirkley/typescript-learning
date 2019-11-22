class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError("Uh oh")
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

/*
- First argument is the prototype of the class
- Second argument is the key (property or function) of the class
- Third argument is the property descriptor
Decorators only run the first time the class is created/defined

The important part of the decorator function is this:

for(var decorator of decorators){
  decorator(target, key, descriptor)
}

In other words, it just calls the function.

Decorators are just syntactic sugar since we could just run the function after
*/
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string) {}

/*

Property descriptors for methods:
writable -- whether or not this property can be changed
enumerable -- whether or not this property will be looped over by a for...in loop
value -- current value
configurable -- property definiton can be changed and property can be deleted

*/

new Boat().pilot();
