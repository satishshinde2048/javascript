function groot(){
    console.log('hello');
    //(groot,4000);
    //console.log('hello');
}
setTimeout(groot,4000);
//groot();
function greet(){
    setTimeout(()=>{
        console.log('satish');
    },2000)
}
greet();

function updatetime(){
    let datetime=new Date();
    let time=datetime.toLocaleTimeString();
    console.log(time);
   // setTimeout(updatetime,1000);
}
setTimeout(updatetime,1000);
//clearTimeout(id);
//updatetime();