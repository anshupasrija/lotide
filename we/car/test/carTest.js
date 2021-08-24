const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2
describe("#shouldBuyCar()", function() {

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});
 
  it("If the car's color is pink then return true.", function() {
    const car = {
      color: "pink"
    };
   
    assert.isTrue(shouldBuyCar(car));
  });
  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
   
    assert.isTrue(shouldBuyCar(car));
  });
  it("sshould return false when there are no details about the car", function() {  
    assert.isUndefined(shouldBuyCar());
  });
