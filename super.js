class car{
    constructor(brand){
        this.carname=brand;
    }
    present(){
        return `I have a ${this.carname}`;
    }
}
class model extends car{
    constructor(brand,color){
        super(brand);
        this.color=color;
    }
    show(){
        return `${this.present()} with ${this.color} color`;
    }
}
let obj=new model('bmw','red');
console.log(obj.show());