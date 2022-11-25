//switch():
let prompt=require('prompt-sync')();
let a=parseFloat(prompt('enter value of a:'));
let b=parseFloat(prompt('enter value of b:'));
let op=prompt('enter operator:');
let result;
switch(op){
    case '+':
        result=a+b;
        //console.log('a+b:',result);
        break;
        case '-':
        result=a-b;
        break;
        case '/':
        result=a/b;
        break;
        case '*':
        result=a*b;
        break;
    default:
        result='invalid';
        break;
};
console.log(result);
