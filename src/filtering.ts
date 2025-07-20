/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];
console.log(numbers);

// `greaterThanTwentyFive` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array containing numbers that are greater than or equal to 25.
// example:
// greaterThanTwentyFive(numbers); // => [38, 35, 40]
function greaterThanTwentyFive(numbers: number[]): number[] {
  // Use filter to get numbers greater than or equal to 25
  const newarray: number[] = numbers.filter((num) => num >= 25);
  // f // replace empty array with what you see is fit
  return newarray; // replace empty array with what you see is fit
}

// `divisibleByFive` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array containing numbers that are divisible by 5.
// example:
// divisibleByFive(numbers); // => [10, 20, 25, 35, 40]
function divisibleByFive(numbers: number[]): number[] {
  const arraytwo: number[] = numbers.filter((num) => num % 5 === 0);
  // write your code here...

  return arraytwo; // replace empty array with what you see is fit
}

export { greaterThanTwentyFive, divisibleByFive };
