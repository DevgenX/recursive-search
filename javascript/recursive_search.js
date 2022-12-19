const { LoaderTargetPlugin } = require("webpack");

function recursiveSearch(arr, target) {
  // type your code here

  // if arr[0] is equals to target, return true;
  // type your code here

  // if the length of array is 0 and target is not hit, return false;

  if (arr[0] === target) return true;

  if (arr.length === 0) return false;

  // while it is not equal, slice the array at 0

  // then recurse
  return recursiveSearch(arr.slice(1), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
