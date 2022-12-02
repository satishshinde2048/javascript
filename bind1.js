let person={
    fname:'satish',
    lname:'shinde',
    //fullname:function(){
      //  return `fullname is ${this.fname} ${this.lname}`;
   // }
}
fullname=function(){
    return `fullname is ${this.fname} ${this.lname}`;
}
let person2={
    fname:'tejas',
    lname:'kambale'
}
let borrowfunction=fullname.bind(person);
let borrowfunction1=fullname.bind(person2);
console.log(borrowfunction());
console.log(borrowfunction1());