var lengthOfLongestSubstring = function(s) {
  //iterate through the string
  var longest = 0;
  for (var i = 0; i < s.length; i++) {
    //create a list of encoutered characters in the current string
    var encountered =  {};
    var j = i;
    var currLength = 0;
    //while any new letters have not been marked as encountered iterate through the string from i index
    while(!encountered[s[j]] && j <= s.length - i) {
      //if a character has been encountered mark it
      encountered[s[j]] = true;
      currLength = currLength + 1;
      j++;
    }
    //if a character is encountered twice, save the length of the string if its longer than any previous strings
    if (currLength > longest) {
      longest = currLength;
    }
  }
  return longest;
};