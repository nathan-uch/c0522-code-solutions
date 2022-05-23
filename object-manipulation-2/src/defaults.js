/* exported defaults */

// loop through the source properties with a for...in loop
// check if the target contains the source property by...
// using the in operator equaling to false
// if false, add it to the target object
// return the target

function defaults(target, source) {
  for (const sourceProp in source) {
    if (sourceProp in target === false) {
      target[sourceProp] = source[sourceProp];
    }
  }
  return target;
}
