/*Binary Search
=>can only be done if the data is sorted
Basic Idea: 
=> split array in half and compare the middle number to the number you are trying to find
=> if the number we are searching for is larger than the middle number
=> take left pointer and set it to the middle +1
=> and again compare the middle number to the number we are searching for
=> if the secret number is smaller, take the right pointer and set it to middle -1
=> continue until ....the number is found or not found (-1)
=> run as long as the left pointer and right pointer do not meet on same index or cross
Edge Cases:
=> what if there are duplicate numbers?
*/

var secretNum = 34;
var input = [2,4,6,7,9,11,22,34,35,36,37,48,67];

function findSecretNum(input, secretNum){
  var lowPointer = 0; 
  var highPointer = input.length - 1 ;
  var middle;
 
  while(lowPointer <= highPointer){
    middle = Math.floor((lowPointer + highPointer) / 2)
    
    if(input[middle] === secretNum) {
      return middle;
    
    } else if (input[middle] < secretNum){
      lowPointer = middle + 1;
   
    } else {
      highPointer = middle - 1;
    }
  
    
  }
  return -1;
}

findSecretNum(input, secretNum)
