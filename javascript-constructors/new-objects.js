var object1 = new Object();
console.log('value of object1:', object1);
console.log('typeof object1:', typeof object1);

var array1 = new Array();
console.log('value of array1:', array1);
console.log('typeof array1:', typeof array1);

var function1 = new Function();
console.log('value of function1:', function1);
console.log('typeof function1:', typeof function1);

var string1 = new String();
console.log('value of string1:', string1);
console.log('typeof string1:', typeof string1);

var number1 = new Number();
console.log('value of number1:', number1);
console.log('typeof number1:', typeof number1);

var boolean1 = new Boolean();
console.log('value of boolean1:', boolean1);
console.log('typeof boolean1:', typeof boolean1);

function ExampleFunction() {}
console.log('prototype property of ExampleFunction:', ExampleFunction.prototype);
console.log('typeof prototype property of ExampleFunction:', typeof ExampleFunction.prototype);

var aFunction = new ExampleFunction();
console.log('new function from ExampleFunction constructor:', aFunction);
var isInstance = aFunction instanceof ExampleFunction;
console.log('is aFunction an instance of ExampleFunction:', isInstance);
