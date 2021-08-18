const args = Number(process.argv.slice(2));
// console.log(args);

let newNumber=[];
const diceRoller = function (input) {
  for(let i =0;i<input ;i++){
    newNumber.push(Math.floor(Math.random()*6)+1);     
    
  }
  console.log("Rolled:",input + " dice: "+ newNumber.join()); 
}
diceRoller(args);