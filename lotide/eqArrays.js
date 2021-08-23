

// const assertEqual = function(actual, expected) {
 
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
//   }  else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const eqArrays=function(num1,num2){
  if(num1.length !== num2.length)
  return false;
  for(let i=0;i<num1.length;i++) {
    if(num1[i] !==num2[i]) {
      return false;
    }
  } return true;

};
module.exports= eqArrays;



// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));