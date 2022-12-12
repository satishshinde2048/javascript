function show(x){
    console.log('sat');
    let y=x+1;
    if(x<20){
        show(y);
    }
}
show(1);