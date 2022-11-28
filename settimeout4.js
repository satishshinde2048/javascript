function show(){
    let datetime=new Date();
    let time=datetime.toLocaleTimeString();
    console.log(time);
    setTimeout(show,1000);
}
show();