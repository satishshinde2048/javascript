const promise1=new 
Promise((resolve,reject)=>{
    if(false){
        resolve('resolved');
    }
    else{
        reject('rejected');
    }
})
promise1.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})