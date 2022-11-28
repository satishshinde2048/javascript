function show(){
    let datetime=new Date();
    let timee=datetime.toLocaleTimeString();
    console.log(time);
}
let id=setTimeout(show,1000);
clearTimeout(id);
console.log('clear time');