let prompt=require('prompt-sync')();
let fruit=prompt('enter fruit name:');
switch(fruit){
    case 'apple':
    case 'banana':
    case 'mango':
    console.log('my favorite fruit is ',`${fruit}`);
    break;
    default:
    console.log('invalid');
}