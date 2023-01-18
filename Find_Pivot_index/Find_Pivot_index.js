/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  //create two vars that represent the sum to the left and right of the current index
  var leftSum =  0;
  var rightSum = 0;
  for (var i = 1; i < nums.length; i++) {
      rightSum += nums[i];
  }
  //iterate through the array of numbers
  for (var i = 0; i < nums.length; i++) {
      if (leftSum === rightSum) {
          return i;
      }
      leftSum += nums[i];
      rightSum -= nums[i + 1];
  }
  return -1;
  //compare the 2 values, if equal return the current index
  //on the next iteration add the value of the previous index to the left sum, and subtract the value of the current index from the right sum;
  //if after iterating through the entire array no match is found retun -1
};

console.log(pivotIndex([1,7,3,6,5,6])); //3