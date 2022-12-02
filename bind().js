let person={
    fname:'satish',
    lname:'shinde',
    fullname:function(){
        return `fullname is ${this.fname} ${this.lname}`;
    }
}
let person2={
    fname:'tejas',
    lname:'kambale'
}
let borrowfunction=person.fullname.bind(person2);
console.log(person.fullname());
console.log(borrowfunction());