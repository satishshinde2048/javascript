function prime(){
    for(let i=1;i<=10;i++){
        let count=0;
        for(let j=1;j<=10;j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==2){
            console.log(i);
        }
    }
}
prime();