var a = new Node('a');
var b = a.next = new Node('b');
var c = b.next = new Node('c');

function reverse(list){
  var current = list; // a
  var previous = null; 
  var next = null; // holds rest of the list
  while(current){    
    next = current.next; //save the rest of the list first
    current.next = previous; //point current node to previous node
    previous = current; //set previous to current node
    current = next;
    /*redefine current to go to next node */
  }

  return previous;//previous now holds the entire list
}

reverse(a);
/*
NOTES:
- check whether the list is empty
- check whether the list has only 1 item in it


*/