const assertEqual = function(actual, expected) {
 
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
  }  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function (items){
  const results = {}
  for( const count of items)
  {
    if(count!==' ')
    {
      if(results[count])
      {
        results[count]++;
      }
      else
      {
        results[count] = 1;
      }
    }
  }
return results;
}
assertEqual((countLetters('LHL')),{L: 2, H: 1});