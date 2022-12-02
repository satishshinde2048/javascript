const PromptSync = require("prompt-sync");

function person(fname,lname){
this.fname=fname;
this.lname=lname;
}
person.prototype.fullname=function(){
    return `fullname is ${this.fname} ${this.lname}`;
}
let obj=new person('satish','shinde');
console.log(obj.fullname());