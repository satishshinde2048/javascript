let person={
    fname:'satish',
    lname:'shinde',
    fullname:function(){
        return `fullname is ${this.fname} ${this.lname}`;
    }
}
console.log(person);
console.log(person.fullname());