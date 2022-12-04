function show(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
show(1,2,3,4,5,6,72,3,4)

let arr=[1,2,3];
let arr1=[4,5,6];
let arr2=[...arr,...arr1];
console.log(arr2);