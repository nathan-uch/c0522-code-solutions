/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) constant time
  const unique = [];                // 1 * 1 = O(1) ct
  for (
    let i = 0;                      // 1 * 1 = O(1) ct
    i < words.length;               // 2 * n = O(n) linear time [less than and .length]
    i++                             // 2 * n = O(n) lt [addition and reassignment]
  ) {
    const word = words[i];          // 2 * n = O(n) lt [finding words[i] and assigning]
    if (!seen[word]) {              // 3 * n = O(n) lt [not, index and if]
      seen[word] = true;            // 2 * n = O(n) lt [index of word and assignment]
      unique[unique.length] = word; // 3 * n = O(n) lt [length, [unique.length] and assign]
    }
  }
  return unique;                    // 1 * 1 = O(1) ct
} // Big O Notation for uniqueLinear: O(n) linear time

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) ct
  for (
    let i = 0;                      // 1 * 1 = O(1) ct
    i < words.length;               // 2 * n = O(n) lt
    i++                             // 2 * n = O(n) lt
  ) {
    const word = words[i];          // 2 * n = O(n) lt
    let isUnique = true;            // 1 * n = O(n) lt
    for (
      let c = 0;                    // 1 * n = O(n) lt
      c < i;                        // 1 * n * n = O(n^2) quadratic time
      c++                           // 2 * n * n = O(n^2) qt
    ) {
      const comparing = words[c];   // 2 * n * n = O(n^2) qt
      if (comparing === word) {     // 2 * n * n = O(n^2) qt [compares and if]
        isUnique = false;           // 1 * n * n = O(n^2) qt
      }
    }
    if (isUnique) {                 // 1 * n = O(n) lt
      unique[unique.length] = word; // 3 * n = O(n) lt
    }
  }
  return unique;                    // 1 * 1 = O(1) ct
} // Big O Notation for uniqueQuadratic: O(n^2) quadratic time
