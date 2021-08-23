// const assertEqual = function(actual, expected) {
 
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
//   }  else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const tail = function(tailArr) {
  return tailArr.splice(1);
  
};

module.exports=tail;