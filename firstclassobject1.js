//behave like object-
let person={name:'satish'};
person.lname='shinde';
person.greet=function(){
    return `${this.name} ${this.lname}`;
}
console.log(person.name);
console.log(person.lname);
console.log(person.greet());

function text(){

}
text.newproparty='adding new proparty';
text.greet=function(){
    return `${this.name} ${this.newproparty}`;
}
console.log(text.name);
console.log(text.newproparty);
console.log(text.greet());