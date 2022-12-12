function person(fname,lname){
    console.log(this);
    this.fname=fname;
    this.lname=lname;
    this.fullname=function(){
        console.log(this);
        return `${fname} ${lname}`;
    }
    console.log(this); 
}
let obj=new person('satish','shinde');
console.log(obj.fullname());