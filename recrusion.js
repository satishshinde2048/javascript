function countdown(num){
   // console.log(num);
    
let num1=num-1;
if(num1>=0){
    if(num1==0){
        console.log('Done');
    }
    else{
    countdown(num1);
}}
else{
    console.log('invalid');
}
    }

countdown(4);