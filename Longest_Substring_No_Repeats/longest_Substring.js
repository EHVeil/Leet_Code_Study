var lengthOfLongestSubstring = function(s) {
  //iterate through the string
  for (var i = 0; i < s.length; i++) {
    var longest = 0;
    //create a list of encoutered characters in the current string
    var encountered =  {};
    //while any encountered letters have not been encountered already iterate through the string from i index
    var j = i;
    var currLength = 0;
    while(!encountered[s[i]]) {
      //if a character has been encountered mark it
      ecountered[s[i]] = true;
      currLength = currLength + 1;
      j++;
    }
    //if a character is encountered twice, save the length of the string if its longer than any previous strings
  }
};