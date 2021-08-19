const eqArrays=function(num1,num2){
  if(num1.length !== num2.length)
  return false;
  for(let i=0;i<num1.length;i++) {
    if(num1[i] !==num2[i]) {
      return false;
    }
  } return true;

};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
    const key1=Object.keys(object1);
   for (const key of key1 ){
    
     if(Array.isArray(object1[key]))
     {

     if(eqArrays(object1[key],object2[key] === false))
     {
       return false;
     } else {
      //  return true;
   }
  }
  else if(object1[key]===object2[key]) {
      // return true;
  } 
  else {
    return false;
  }

   
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
}

const ab = {
  a: "1",
  b: "2"
};

const ba = {
  b: "2",
  a: "1"
}

const abc = {
  a: "1",
  b: "2",
  c: "3"
}

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1"
};

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);
assertObjectsEqual(dc, {d: ["2",3], c: '1'});