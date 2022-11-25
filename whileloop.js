let i=1;
while(i<=10){
    console.log(i);
    i++;
}
i=0;
while(i<=10){
    console.log('hello');
    i++;
}

let prompt=require('prompt-sync')();
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;
let num=parseInt(prompt('enter value:'));
while(num>=0)
{
    sum+=num;
    num=num=parseInt(prompt('enter value:'));
};
console.log(sum);