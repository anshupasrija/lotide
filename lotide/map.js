const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays=function(num1,num2){
  if(num1.length !== num2.length){
  return false;
  }
  for(let i=0;i<num1.length;i++) {
    if(num1[i] !==num2[i]) {
      return false;
    }
  } 
  return true;

};
const assertArraysEqual=function(arg1,arg2) {
  if (eqArrays(arg1,arg2)) {
    console.log(`✅✅✅ Assertion Passed:, ${arg1} === ${arg2}`);
  }  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arg1} !== ${arg2}`);
  }
};

