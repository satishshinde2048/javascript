let person={name:'satish'};
person.lname='shinde';
console.log(person.lname);
function test(){

}
test.lname='hardy';
console.log(test.lname);

let thisfunction=function(){
    console.log('hello');
}
console.log(thisfunction);
thisfunction();
let array=[1,2,thisfunction];
array[2]();