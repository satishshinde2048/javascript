let person={
    fname:'satish',
    lname:'shinde',
    fullname:function(){
        console.log('console from fullname',this);
        return `fullname is ${this.fname} ${this.lname}`;
    },
    testthis:function(){
        let test=(()=>{
         console.log('console from test',this);
        })
        test();
    }
}
//console.log(person);
//console.log(person.fullname());
person.fullname();
person.testthis();