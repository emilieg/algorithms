/* How to implement a linked list in JS
=> create a Node constructor
=> constructor will have 2 attributes
=> value and next
=> next will point to the next node
*/

var Node = function(value){
  this.value = value,
  this.next = null
}


var a = new Node('a');
var b = a.next = new Node('b');
var c = b.next = new Node('c');
console.log(a);