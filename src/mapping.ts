/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// `squaredNumbers` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array that contains each number squared.
// example:
// squaredNumbers(numbers); // => [100, 169, 400, 625, 1444, 1225, 1600]
function squaredNumbers(numbers: number[]): number[] {
  const squaredarray : number[] = numbers.map((numbers )=> numbers * numbers);
  // write your code here...

  return squaredarray; // return the array of squared numbers
}

// `doubledNumbers` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array that contains each number multiplied by 2.
// example:
// doubledNumbers(numbers); // => [20, 26, 40, 50, 76, 70, 80]
function doubledNumbers(numbers: number[]): number[] {
  const doublearray : number []=numbers.map((numbers) => numbers *2);
  // write your code here...

  return doublearray; // replace empty array with what you see is fit
}

export { squaredNumbers, doubledNumbers };
