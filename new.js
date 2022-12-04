function sum(a,b){
    return a+b;
}

//let x= new sum(10,5);
console.log( sum(10,5));
let user={
    show:function(){
        console.log(arguments);
    }
}
user.show(1,2,3,4)

let person={
    name:'satish'
}
let person2={
    person
}
console.log(person2);
