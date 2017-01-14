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
// console.log(a);

/* How to implement a linked list with functions */

function LinkedList (){
  var Node = function(element){
    this.element = element;
    this.next = null;
  };
  var length = 0;
  var head = null;

  //append at the end of the list
  this.append = function(element){
    var node = new Node(element);
    var current;
    if(head === null){
      head = node; 
    } else {
      current = head;
      
      while(current.next){
        current = current.next;
    }
    current.next = node
    }
    length++;
  };

  this.insert = function(position, element){};
  this.removeAt = function(position){
    var current;
    var count = 0;
    var previous;
    
    if(position > -1 && position < length){
      current = head
      if(position === 0){
          head = current.next;
        } else {
          while(count !== position){
            previous = current
            current = current.next;
            count ++;
          }
        previous.next = current.next;
        length--;
        // console.log(current.element);
        console.log(head);
        return current.element;
      }
    } else {
      return null;
    }    
  };
  this.remove = function(element){};
  this.indexOf = function(element){};
  this.isEmpty = function(){};
  this.size = function(){};
  this.toString = function(){};
  this.print = function(){};
};

var list = new LinkedList();
list.append(10);
list.append(15);
list.append(9);
list.append(3);
list.append(5);

list.removeAt(1);
