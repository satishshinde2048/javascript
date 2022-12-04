//let:
let name="satish shinde";
if(true){
    let name="raj";
    console.log(name);
}
console.log(name);

//const:
const name1='satish';
//name1='sat'; this give error
console.log(name1);

//arrow function:
let sum=(a,b)=>{
    return a+b;
}
console.log(sum(10,5));

//defult parameter:
let add=(a=10,b=10)=>{
    return a+b;
}
console.log(add(10,5));
console.log(add(10,));
console.log(add());

//class:
class car{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    call(){
        return `i have a ${this.name} car with ${this.color} color`;
    }
}
//let obj=new car('bmw','red');
//console.log(obj.call());
class bmw extends car{
    constructor(engine){
        super('bmw','red');
        this.engine=engine;
    }
    show(){
        return `${this.call()} with ${this.engine}`;
    }
}
let obj1=new bmw('power');
console.log(obj1.show());

//template literals=
let fname='satish';
let lname='shinde';
//es5
console.log('hello '+fname+' '+lname);//simple way
//es6
console.log(`hello ${fname} ${lname}`);

// destructing syntx=
//es5=
let person={
    name:'satish',
    id:3,
    age:22
}
console.log(person.name);
console.log(person.id);
console.log(person.age);

//syntax=es6-
let person1={
    name2:'satish',
    id:3,
    age:22
}
let {name2,id,age}=person1;
console.log(id);
console.log(age);
console.log(name2);