const findKey = function(object1, callback)
{
  
  const keys =  Object.keys(object1)
  for(let key of keys) {    
    if(callback(object1[key]))
      return key;
     } 
  }


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)
console.log(result1);