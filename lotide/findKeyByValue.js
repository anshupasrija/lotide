const assertEqual = function(actual, expected) {
 
  if ((actual) === (expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
  }  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const findKeyByValue =function(obj,item){
  const keys =  Object.keys(obj)
  for(let key of keys) {    
    if(obj[key]=== item){   
      return key ;
     } 
  } 
};



// const findKeyByValue =function(obj,value){
//   for (let key in obj){
//     if (obj[key] === value){ 
//       return key;
//   }
  
//   }
// };



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);