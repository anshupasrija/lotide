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
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,3]);