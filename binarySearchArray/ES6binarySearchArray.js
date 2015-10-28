/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

let binarySearch = (array, target) => {
  let first = 0;
  let middle = Math.floor(array.length / 2);
  let last = array.length - 1;
  while(middle !== first){
    if(array[middle] === target){
      return middle;
    }
    if(array[middle] < target){
      first = middle;
      middle = middle + Math.floor((last - middle) / 2);
    }else if(array[middle] > target){
      last = middle;
      middle = Math.floor(last / 2);
    }
  }
  return -1;
};


// var binarySearch = function(array, target) {
//   var first = 0;
//   var middle = Math.floor(array.length / 2);
//   var last = array.length - 1;

//   while(middle !== first){
//     if(array[middle] === target){
//       return middle;
//     }
//     if(array[middle] < target){
//       first = middle;
//       middle = middle + Math.floor((last - middle) / 2);
//     }else if(array[middle] > target){
//       last = middle;
//       middle = Math.floor(last / 2);
//     }
//   }
//   return -1;
// };
