/**
 * @param {number[]} nums
 * @return {number[]}
 */

//input an array of integers
//output an array containing the running sum of the original array
//constraints array length is between 1 and 1000, numbers are between -10^6 and 10^6 in length
//edge cases incorrect types of data in the array, numbers too large for int type

var runningSum = function(nums) {
  //use a reducing function to iterate through the array
  var runningSum = [nums[0]];
  nums.reduce((acc, nextVal) => {
      var sum = acc + nextVal;
      runningSum.push(sum);
      return sum;
  })
  return runningSum;
  //place each sum into a result array
  //return the final sum
};