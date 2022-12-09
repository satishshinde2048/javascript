function show(x){
    console.log(x);
    x+=1;
    while(x<10){
       
        show(x);
        
    }
}
show(1);