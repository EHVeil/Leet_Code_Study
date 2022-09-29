/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var addTwoNumbers = function(l1, l2) {
  //iterate through the linked lists
  var iterator = function(node) {
    //take the current number and concatenate the previously concatenated or first number onto it
    var currNode = node;
    var conNum = '';
    do {
      conNum = currNode.val + conNum;
      currNode = currNode.next;
    } while (currNode !== null)
    return conNum;
  };
  //do this for both lists to determine the numbers represented by them
  //if the number is 31 or more characters
  var result = parseInt(iterator(l1)) + parseInt(iterator(l2))
  result = result.toString();
  var finalLL;
  for (var i = 0; i < result.length; i++) {
    currNode = new ListNode(result[i], finalLL);
    finalLL = currNode;
  };
  //add the two results together
  //take the result iterate through it creating a new node for each number
  //return the created linked list
  return finalLL;
};