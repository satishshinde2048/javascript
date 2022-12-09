function count(num){
    console.log(num);
    newnum=num-1;
    if(newnum>0)
{
    count(newnum);
}
}
count(4);