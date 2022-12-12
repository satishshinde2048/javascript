function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(3)(5));