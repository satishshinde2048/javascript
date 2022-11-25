//if statement:
let a=6,b=5;
if(a>b)//true
{
    console.log(a);
}
console.log('hello');

if(a<b)//false
{
    console.log(a);
}
console.log('hello');

//if else:
if(a>b)//true
{
    console.log(a);
}
else
{
    console.log(b);
}
console.log('hello');

if(a<b)//false
{
    console.log(a);
}
else
{
    console.log(b);
}
console.log('hello');

//if else if:
if(a<b)//true
{
    console.log(a);
}
else if(a<b)
{
    console.log(b);
}
else
{
    console.log(false);
}
console.log('hello');

//nested if else :
if(a>b){
    if(a<b){
     console.log(a);
    }
    else{
        console.log(b);
    }
}
else{
    console.log(false);
}

//body of single sentance if else statement:
if(a>b)
console.log(a);
else
console.log(b);

//switch statement():
let c=2;
switch(c){
    case 1:
        c='one';
        break;
    case 2:
        c='two';
        break;
    case 3:
        c='three';
        break;
    default:
        c='invalid';
        break;
}        
console.log(c);