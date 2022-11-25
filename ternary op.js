/*convert program into ternary op:
let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

console.log(result);
 */
let prompt=require("prompt-sync")();
let age=prompt('enter age:');
if(age>=18 ?console.log("You are eligible to vote.") :console.log("You are not eligible to vote yet."));
 
//nested ternary:
let a=prompt('enter value of a:');
if(a>=0?(a==0 ?console.log('zero'):console.log('positive')):console.log('negative'));

var num1 = 5;
 var num2 = 10;
 if(num1<num2){
     console.log(`The larger of ${num1} and ${num2} is ${num2}.`)
 }