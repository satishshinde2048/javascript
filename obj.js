let student={
    name:'satish',
    age:22
};
console.log(student);
//one line
let person={name:'tejas',age:55};
console.log(person);
//acess proparties of object-
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);

//nested object:
let student1={
    name:'satish',
    id:2025,
    mark:{
        physics:89,
        chemistry:90
    }
    };
 console.log(student1);
 console.log(student1.mark);
 console.log(student1['mark']);
 console.log(student1.mark.chemistry);

 //js object method/function:
 let student2={
    name:'satish',
    age:22,
    greet:function(){console.log('hello')}//method
};
console.log(student2.greet());
console.log(student2);
//js built in function:
let result=parseInt('23.45');
console.log(result);

//adding propaties and method:
let car={};
car.name='bmw';
car.greet=function(){
    console.log('hello satish')
};
console.log(car);
console.log(car.greet());

//this keyword:
let student3={
    name:'satish',
    age:22,
    greet:function(){
        let lname='shinde';
        console.log('my name is'+' '+this.name+' '+lname)}//method
};
console.log(student3.greet());