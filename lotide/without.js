const eqArrays=function(num1,num2){
  if(num1.length === num2.length){
    for(let i=0;i<num1.length;i++) {
      if(num1[i] !==num2[i]) {
        return false;
      }
    } return true;
    }

};
const assertArraysEqual=function(arg1,arg2) {
  if (eqArrays(arg1,arg2)) {
    console.log(`✅✅✅ Assertion Passed: ${arg1} === ${arg2}`);
  }  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arg1} !== ${arg2}`);
  }
};
const without=function(source,itemsToRemove) {
  const newArray=[];
  for(let i=0;i<source.length;i++)
  {
    if(itemsToRemove.indexOf(source[i]) === -1){
      newArray.push(source[i]);
    }
  }
  return newArray;
 
 }

 assertArraysEqual(without([1,2,3],[1]),[2,3]);
