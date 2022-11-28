//dec&call
function sum(a,b){//parameter
    console.log(a+b);
}
sum(3,4);//argument

//default para:
function sum(a=4,b=5){//parameter
    console.log(a+b);
}
sum(3);//argument

//return statement:
function sum(a,b){//parameter
    let c=a+b;
    return c;
}
let d=sum(3,4);//argument
console.log(d);

//helper fun:
function squre(a){
    return a*a;
}
function compute(a){
    return squre(a);
}
let e=compute(5);
console.log(e);
//anonymous function:
let add=function(a,b){//parameter
    console.log(a+b);
}
add(3,4);//argument
//arrow function:
let sum1=(a,b)=>{//parameter
    console.log(a+b);
}
sum1(3,4);//argument
//hoisting-
sum2(3,4);//argument
function sum2(a,b){//parameter
    console.log(a+b);
}

console.log(f);
var f;

console.log(f);
var f=4;

f=3;
console.log(f);
var f;

f=5;
console.log(f);
var f=4;

//curring:
function add3(a){
    return function(b){
        return a+b;
    }
}
let n=add3(3)(6);
console.log(n);

//closure:
function multi(){
    let student={name:'sat',id:25}
    return function(){
        console.log(`my name is ${student.name}`);
    }
}
let initialiseClosure=multi();
initialiseClosure();