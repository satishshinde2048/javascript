let count=0;
let id=setInterval(function(){
    count+=1;
    if(count===10){
        clearInterval(id);
    }
let datetime=new Date();
let time=datetime.toLocaleTimeString();
console.log(time);
},1000)