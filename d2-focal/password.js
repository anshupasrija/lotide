let input = process.argv[2];
const obfuscate =function(arr)
{
  for(arr1 of arr)
  {
    arr1==='a'? arr1==='4':arr1="";
    arr1==='e'? arr1==='3':arr1="";
    arr1==='i'? arr1==='0':arr1="";
    arr1==='o'? arr1==='-1':arr1="";
  }
};
console.log(obfuscate(input));