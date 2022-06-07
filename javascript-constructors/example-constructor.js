function ExampleConstructor() { }
console.log('prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newExConstructor = new ExampleConstructor();
console.log('new ExampleConstructor:', newExConstructor);
var isInstanceExConstructor = newExConstructor instanceof ExampleConstructor;
console.log('is newExConstructor an instance of ExampleConstructor:', isInstanceExConstructor);
