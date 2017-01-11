/*Binary Search
=>can only be done if the data is sorted
Basic Idea: 
=> split array in half and compare the middle number to the number you are trying to find
=> if the number we are searching for is larger than the middle number
=> take the upper half of the split array and split it in half again 
=> and again compare the middle number to the number we are searching for
=> continue until ....the number is found or not found (-1)
=> run while there are still numbers to go thru in the array
Edge Cases:
=> what if there are duplicate numbers?
*/

var secretNum = 34;
var input = [2,4,6,7,9,11,22,34,35,36,37,48,67];

function findSecretNum(input, secretNum){
  var lowHalf = 0; //position in array
  var highHalf = input.length -1 ;  //position in array
  var middle = input[Math.floor(lowHalf + highHalf / 2)];

  console.log("highHalf: ", highHalf);
  console.log("middle: ", middle);

  
  if(pointer === secretNum) {
    return pointer;
  }
  // while(pointer !== secretNum ){
  //   if(pointer === secretNum) {
  //     return pointer;
  //   }
  //   else if(pointer > secretNum){
  //     console.log("pointer is bigger");
  //     middle = Math.floor(lowHalf/2);
  //   } else if (pointer < secretNum) {
  //     console.log("pointer is smaller");
  //     middle = Math.floor(highHalf/2);
  //   } 
  // }

}

findSecretNum(input, secretNum)