class mobile{
    constructor(name,ram){
        console.log('constructor called');
        this.name=name;
        this.ram=ram;
    }

    call()
    {
        console.log(`i am calling from ${this.name}`);
    }
}
let samsung=new mobile('samsung','4gb');
let iphone13=new mobile('iphone13','5gb');

samsung.call();
iphone13.call();
