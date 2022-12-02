function supertype(){
    this.name='satish';
}
supertype.prototype.getname=function(){
    return this.name;
}
function subtype(){
    this.age=22;
    
}
subtype.prototype=new supertype();
subtype.prototype.getage=function(){
    return this.age;
}
let obj=new subtype();
console.log(obj.name);
console.log(obj.age);
console.log(obj.getname());
console.log(obj.getage());