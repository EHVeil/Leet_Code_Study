/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  //the number of rows determines how many characters will be in the 0 index of each row
  var rows = [];
  //iterate through the string and push r characters to the rows array
  var i = 0;
  var r = 0;
  var dir = true;
  while (i < s.length) {
    rows[r] = rows[r] + s[i];
    if (r === numRows - 1) {
      dir = !dir;
    }
    if(dir) {
      r++;
    } else {
      r--;
    }
    i++;
  }
  return rows.join();
  //once at the limit of r begin adding characters to the orevious rows until you reach 0
  //do this until the string is exhausted

};