function test(string){
    console.log(string);
}
function delayedFunction(fn){
    return function(val,delay){
        setTimeout(function(){
            fn(val);
        },delay)
    }
}
let temp=delayedFunction(test);
temp('satish',2000);

function functionReturner(fn){
    return fn;
}
let show=functionReturner(test);
show('raj');