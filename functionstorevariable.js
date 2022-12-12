function sum(a,b){
    console.log(a+b);
}
//console.log(sum(10,5));
//let add=sum;
//console.log(add(10,5));
let array=[1,23,34,sum];
array[3](10,5);
console.log(array[1]);