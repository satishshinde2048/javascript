function show(){
    let datetime=new Date();
    let time=datetime.toLocaleTimeString();
    console.log(time);
    let id=setTimeout(show,1000);
    clearTimeout(id);
}
show();