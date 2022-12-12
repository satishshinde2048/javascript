let y=1;
function show(x){
    y=y*x;
     let number=x-1;
     if(number>0){
        show(number);
     }
     else{
     console.log(y);
    }
}

show(5);