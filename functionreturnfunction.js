function sum(str){
console.log(str);
}
function delayedfunction(fn){
    return function(value,delay){
        setTimeout(() => {
           fn(value);
        },delay);
    }
}
let add=delayedfunction(sum);
add('satish',1000);
