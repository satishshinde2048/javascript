
function validatenumber(number){
    let regex=/([0-9]{2})([0-9]{5})([0-9]{5})/g
    let result=number.match(regex);
    if(result){
        console.log('valid number');
    }
    else{
        let newnumber=prompt('enter number in xx xxxxxxxxxx format');
        validatenumber(newnumber);
    }
}
const prompt=require("prompt-sync")();
let number=prompt('enter number');
validatenumber(number);


function validateemail(email){
    let regex1=//g
    let result1=email.match(regex1);
    if(result1){
        console.log('valid email');
    }
    else{
        let newemail=prompt('enter email in abc@gmail.com format');
        validateemail(newemail);
    }
}

let email=prompt('enter email');
validateemail(email);