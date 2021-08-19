
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
  }  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
       console.log("comparing arrays");
     if(eqArrays(object1[key],object2[key]))
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); 