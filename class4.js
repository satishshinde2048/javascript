class mobile{
constructor(name,color) {
    this.name=name;
    this.color=color;
}
show(){
    return `i have ${this.name} with ${this.color} color`;
}
}
//let obj=new mobile('realme','red');
//console.log(obj.show());
class note10 extends mobile{
    constructor(ram,processor) {
        super('note10','red');
        this.ram=ram;
        this.processor=processor;
    }
    show1(){
        return `${this.show()} with ${this.ram} and ${this.processor}`;
    }
}
let obj=new note10('4gb','dragon');
console.log(obj.show1());
