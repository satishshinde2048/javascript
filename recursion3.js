function getnumber(x){
    console.log(x);
    let y=x+1;
    if(y<=20){
        getnumber(y);
    }
}
getnumber(1);

int i=0;
begin:
i+=1;
cout<<i<<endl;
if(i<10){
 goto begin;