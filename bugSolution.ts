function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or handle the error in a more appropriate way
  }

  return numA + numB;
}

let result1 = add(1, 2); // Correct
let result2 = addSafe(1, '2'); // Correct and handles string input
let result3 = addSafe('1', 2); // Correct and handles string input
let result4 = addSafe('abc', 2); // Handles invalid input
console.log(result1, result2, result3, result4); // 3 3 3 0