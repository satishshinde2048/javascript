function person(fname,lname){
    console.log('value of this',this)
    this.fname=fname;
    this.lname=lname;
    this.getfullname=function() {
        return `fullname is ${this.fname} ${this.lname} `
    }
    console.log('value of this',this)
}
let satish=new person('satish','shinde');
console.log(satish.getfullname());
//let raj=new person('raj','shinde');
//console.log(raj.getfullname());