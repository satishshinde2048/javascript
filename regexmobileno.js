function validatenumber(num){
    let pattern=/^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})/g
    let result=pattern.test(num);
    if(result){
        console.log(`${num} is valid`);
    }
    else{
        console.log(`${num} is not valid`);  
    }
}
let prompt=require('prompt-sync')();
let number=prompt('enter number in xx xxxxx xxxxx format');
validatenumber(number);