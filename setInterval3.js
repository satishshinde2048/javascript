function show(){
    let datetime=new Date();
    let time=datetime.toLocaleTimeString();
    console.log(time);
}
setInterval(show,1000);