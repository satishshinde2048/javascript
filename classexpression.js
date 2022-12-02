let mobile=class{
    constructor(name,color){
        console.log('constructor called');
        this.name=name;
        this.color=color;
    }
    call(){
        console.log(`i am call from ${this.name} ${this.color}`);
    }
}
let obj1=new mobile('bmw','red');
let obj2=new mobile('nexon','blue');
obj1.call();
obj2.call();
console.log(obj1.name);