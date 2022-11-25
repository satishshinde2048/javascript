let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

 i=1;
do{
    console.log('hello');
    i++;
}while(i<=5);

let prompt=require('prompt-sync')();
let num=parseInt(prompt('Enter number:'));
let sum=0;
do{ 
    sum+=num;
    num=parseInt(prompt('Enter number:'));
}while(num>=0);
console.log(sum);

