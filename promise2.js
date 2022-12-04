let mypromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        if(false)
        resolve('some data from server')
        else 
        reject('requast failed')
    },2000)
})
mypromise.then(function(data){
    console.log(data);
},(function(err){
    console.log(err);
}))