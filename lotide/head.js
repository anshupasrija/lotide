// const assertEqual = function(actual, expected) {
 
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
//   }  else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// TEST CODE
//assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(10, 1);

const assertEqual =require('./assertEqual');
const head=function(num)
{
 
  return num.shift(1);
};

module.exports =head;