class car{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    call(){
        console.log('i am calling from',this.name);
    }
}

let nexon=new car('nexon','red');
let bmw=new car('bmw','black');

nexon.call();
bmw.call();
console.log(nexon.color);
console.log(bmw.color);