class Animals{
    constructor(name,specie){
        this.name=name;
        this.specie=specie;
    }
    proto(){
        console.log( `${this.name} can sing`);
    }
}
let cat = new Animals('Billi', 'Cat');
//console.log(cat.proto());
cat.proto();