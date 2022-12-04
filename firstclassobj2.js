let person={
    name:'satish'
}
function test(){
    return 'hello satish';
}
let array=[1,null,true,test,person];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[3]());
console.log(array[4]);