let person={
    fname:'satish',
    lname:'shinde',
    getfullname:function(){
        console.log('console from getfullname',this);
        return `fullname is ${this.fname} ${this.lname}`;
    },
    testthis:function(){
        let test=(()=>{
            console.log('console from test',this);
        })
        test();
 }
    };
person.getfullname();
person.testthis();