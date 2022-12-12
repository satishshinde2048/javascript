function sum(a,b){
     console.log(a+b);
     return function(){
        console.log(a+b);
     }
}
let add=sum(20,30)();
//add();
//add();