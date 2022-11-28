//synchronous:
console.log('a');
console.log('b');
console.log('c');

//sync:
console.log('a');
function fetchdata(){
    let n=100000000;
    while(n>0){
        n--;
    }
    console.log('b');
}
fetchdata();
console.log('c');

//asynchronous:
console.log('a');
function fetchdata1(){
    setTimeout(()=>{
        console.log('b');
    },0)
}
fetchdata1();
console.log('c');


console.log('a');
function fetchdata3(){
    setTimeout(multi,4000);
    function multi(){
        console.log('b');
    }
}
fetchdata3();
console.log('c');