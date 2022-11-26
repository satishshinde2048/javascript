function countdown(num){
console.log(num);
let num1=num-1;
if(num1>0){
    countdown(num1);
}
}
countdown(10);