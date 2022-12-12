class car{
    constructor(name){
      this.name=name;
    }
    show(){
        return `i am ${this.name}`;
    }
}
class model extends car{
    constructor(){
    super('satish');
    }
    show1(){
        //super.show();
        return`  ${this.show()} i am kind boy`;
    }
}
let obj=new model();
console.log(obj.show());
console.log(obj.show1());

