const tail = require('../tail');
const assert =require('chai').assert;



// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Lighthouse");
// assertEqual(result[2], "Lighthouse");
describe('#tail',()=>{
  it('return Lighthouse, labs for [Hello,lighthouse,labs]',()=>{
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']),['Lighthouse','Labs']);
  });
  it('return 2,3,4 for [1,2,3,4]',()=>{
    assert.deepEqual(tail([1,2,3,4]),[2,3,4]);
  });
});



