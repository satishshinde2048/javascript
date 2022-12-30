
function fibonacci(n){ 
    let t1=0,t2=1,t3;
    console.log(t1);
    console.log(t2);
    for(let i=2;i<=n;i++){
        t3=t1+t2;
        console.log(t3);
        t1=t2;
        t2=t3;
    }
}
fibonacci(8);