const assert = require('chai').assert;
const middle = require('../middle');

// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
// assertArraysEqual(middle([1, 2, 4]),[2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[2, 3]);

describe('#middle',()=>{
  it('return [2,3] for [1, 2, 3, 4]',()=>{
    assert.deepEqual(middle([1, 2, 3, 4]),[2,3]);
  });
  it('return [2,3] for [1, 2, 4]',()=>{
    assert.deepEqual(middle([1, 2, 4]),[2]);
  });
  it('return [2,3] for [1, 2,3,4,5,6]',()=>{
    assert.deepEqual(middle([1, 2, 3,4,5,6]),[3,4]);
  });
})