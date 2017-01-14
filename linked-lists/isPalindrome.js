/*Create a function that checks whether a linked list is a Palindrome*/
/*
STEP1: check if the list has only 1 item in it, if yes, return true
STEP2: check if the list is empty, if yes, return false
STEP3: set up a variable current, fastPointer, slowPointer, stack for storage
=> slowPointer will move one item at a time
=> fastPointer will move 2 items at a time
=> we need to take into consideration whether the list is an even length or odd
=> if the fastPointer.next is null, then the list length is odd
=> if the fastPointer is null, then the list is even
if the list length is odd then we can disregard the middle element
=> so to compare the results I will pop one item at the time out of the stack and 
compare with the slowPointer
=> if the list is odd then I will move my slowPointer one step forward before I start comparing 
in order to skip the middle element
*/

function isLlPalindrome(list){
  var slowPointer = head; //slow and fast pointers will start at the head
  var fastPointer = head;
  var storageStack = [];

  while(fastPointer !== null && fastPointer.next !== null){
    storageStack.push(slowPointer.data);
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;    
  }
    if(fastPointer === null){
      slowPointer = slowPointer.next;
    }

  while(slowPointer !== null){
    if(slowPointer.data !== storageStack.pop()){
      return false;
    }
    slowPointer = slowPointer.next;
  }  
  return true;
}