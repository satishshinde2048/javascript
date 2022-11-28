function show(){
    let datetime=new Date();
    let time=datetime.toLocaleTimeString();
    console.log(time);
    let id=setInterval(show,1000);
clearInterval(id);
}
show();
