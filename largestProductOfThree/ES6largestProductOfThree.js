/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


let largestProductOfThree = array => {
  array = array.sort(function(a, b){return Math.abs(a) > Math.abs(b)});
  let result = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  return result;
};

