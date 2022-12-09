function getnumber(x){
    console.log(x);
    let y=x+1;
    if(y<=20){
        getnumber(y);
    }
}
getnumber(1);

