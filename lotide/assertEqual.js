const assertEqual = function(actual, expected) {
  // console.assert(actual === expected, actual, "\u2705", "!=", expected);
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:" ,actual === expected);
  }  else {
    console.log("🛑🛑🛑 Assertion Failed:",actual !== expected);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(10, 1);