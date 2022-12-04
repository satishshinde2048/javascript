let a=5;
a=6;
console.log(a); 
const b=9;
console.log(b);

const person={
    id:2,
    name:'satish'
}
person.id=3;
console.log(person);

const person1={
    id:2,
    fname:'satish'
}
console.log(person1);
Object.freeze(person1);
console.log(person1);
person1.id=3;
person1.fname='raj';
console.log(person1);

const person2={
    name:'raj',
    id:2
}
Object.defineProperty(person2,"id",{
    value:2,
    writable:false
})
console.log(person2);
person.id=3;
console.log(person2);