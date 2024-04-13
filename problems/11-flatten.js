/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Initialize an empty array to store the flattened elements
  let result = []
  // iterate through each element of the input array
arr.forEach(element => {
// check if the element is an array
if (Array.isArray(element)){
// recursively call flatten and add the results to the empty array
result = result.concat(flatten(element))
// else if not an arry push it into the empty array
  }else {
    result.push(element)
  }
});
  //return empty array
  return result
}
debugger
flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
