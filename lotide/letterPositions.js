
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
const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (letter != " ") {
      if (results[letter]) {
        const arr1 = results[letter];
        console.log("arr1",arr1);
        arr1.push(index);
        results[letter] = arr1;
      } else {
        const arr = [];
        arr.push(index);
        results[letter] = arr;
        // console.log(arr);
        console.log("result",results);
      }
    }
    index++;
  }
  return results; //{ h:[0],}
};

console.log(letterPositions("hh"));

// [0] result["h"] =[0,1]