const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
  }  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  
  for (const item of allItems) {
    // console.log("Items",item);
    // console.log("results",results);
    // console.log("Result Items:",results[item]);
    // console.log("Items to count",itemsToCount[item]);
    if(itemsToCount[item])
    {
    if (results[item]) { 
      // console.log("Result items in If Statement",results[item]);
      results[item] += 1;
      console.log(results);
    } else {
      console.log("ELSE");
      results[item] = 1;
    }
    console.log("After if statement",results);
  }
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);