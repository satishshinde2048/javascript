function sum(a,b){
    console.log(a+b);
    return function(){
        console.log(a+b);
    }
}
let c=sum(10,5);
c();           




