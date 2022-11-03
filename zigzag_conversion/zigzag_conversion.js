/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if (numRows === 1 || s.length <= 1) {
      return s;
  }
  //the number of rows determines how many characters will be in the 0 index of each row
  var rows = [];
  //iterate through the string and push r characters to the rows array
  var i = 0;
  var currRow = 0;
  var dir = true;
  while (i < s.length) {
      if (!rows[currRow]){
          rows[currRow] = s[i];
      } else {
         rows[currRow] = rows[currRow] + s[i];
      }
    if (currRow === numRows - 1 || rows.length === numRows && currRow === 0) {
      dir = !dir;
    }
    if(dir) {
      currRow++;
    } else {
      currRow--;
    }
    i++;
    console.log(rows);
  }
  return rows.join('');
  //once at the limit of r begin adding characters to the orevious rows until you reach 0
  //do this until the string is exhausted

};