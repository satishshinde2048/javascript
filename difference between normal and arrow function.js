// syntax of normal function=
function squre(x){
    return x*x;
}
console.log(squre(4));
//syntax of arrow function-
let squre1=(x)=>{
    return x*x;
}
console.log(squre1(5));

let person={
    fname:'satish',
    lname:'shinde',
    greet:function(){
        return `${this.fname} ${this.lname}`;
    },
    greet1:()=>{
        return `${this.fname} ${this.lname}`;
    }
}
console.log(person.greet());
console.log(person.greet1());

let x=function(){
    console.log(arguments);
}
 x(1,2,3);

