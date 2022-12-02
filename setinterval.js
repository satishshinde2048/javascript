let count=0;
let id=setInterval(()=>{
    if(count===10){
        clearInterval(id);
    }
    else{
        count+=2;
        console.log(count);
        }
},2000)