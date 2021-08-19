const eqArrays=function(num1,num2){
if(num1.length !== num2.length)
return false;
for(let i=0;i<num1.length;i++) {
  if(num1[i] !==num2[i]) {
    return false;
  }
} return true;

};
const assertArraysEqual=function(arg1,arg2) {
  if (eqArrays(arg1,arg2)) {
    console.log(`✅✅✅ Assertion Passed:, ${arg1} === ${arg2}`);
  }  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arg1} !== ${arg2}`);
  }
};
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    let A = arr.length / 2 - 1;
    let B = arr.length / 2;
    return [arr[A], arr[B]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]