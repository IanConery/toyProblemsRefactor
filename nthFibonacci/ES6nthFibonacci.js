/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */
//I am assuming that the number being passed to nthFib will always be greater than 0
let nthFibonacci = (number, current, previous) => {
  current = current || 0;
  previous = previous || 0;
  
  if(number === 0){
    return current;
  }
  
  if(current === 0 && previous === 0){
    return nthFibonacci(number - 1, current ++, previous);
  }

  previous = [current, current = current + previous][0];

  return nthFibonacci(number - 1, current, previous);
  
};
