const person={
    name:'satish',
    id:10
}
person.id=20;
console.log(person);
/*Object.defineProperty(person,'id',{
    value:5,
    writable:false
})
console.log(person);
person.id=25;
console.log(person);
person.name='tejas';
console.log(person);
Object.defineProperty(person,'name',{
    value:'raj',
    writable:false
})
console.log(person);
person.name='tejas';
console.log(person);*/
Object.freeze(person);
console.log(person);
person.id=25;
delete person;
person.age=37;
console.log(person);