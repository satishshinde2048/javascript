let person={
    fname:'satish',
    lname:'shinde',
    age:22,
    greet:function(){
        console.log(`fullname is ${this.fname} ${this.lname} `);
    }
}
console.log(person.greet());