const person={
    name:'satish',
    id:10
}
person.age=23;
person.lname=function(){
    console.log('hello');
}
console.log(person.name);
console.log(person.age);
person.lname();
function show(){

}
show.newproperty='property';
person.lname=function(){
    console.log('hello');
}
console.log(person.name);
console.log(show.newproperty);
person.lname();