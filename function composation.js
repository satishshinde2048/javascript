function double(x){
    return x*2;
}
function squre(x){
    return x*x;
}
let result=double(2);
let result1=squre(result);
console.log(result1);

let result2=squre(double(2));
console.log(result2);