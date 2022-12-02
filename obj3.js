function person(fname,lname){
    console.log('value of this1',this);
    this.fname=fname;
    this.lname=lname;
   this.fullname=function(){
        return `fullname is ${fname} ${lname} `
    }
    //console.log('value of this2',this)
}
let obj1=new person('satish','shinde');
//let obj2=new person('raj','shinde');
console.log(obj1.fullname());
//console.log(obj2.fullname());
//console.log(obj1.fname);

