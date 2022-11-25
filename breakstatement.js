loop1:
for(let i=1;i<=5;i++){
    loop2:
    for(let j=1;j<=5;j++){
        if(i===1&&j===1){
            break loop1;
        }
        console.log(i,j);
    }
}

for(let i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=3;j++){
        if(i==2){
            break;
        }
        console.log(i,j);
    }
}

for(let i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log('hello');
}

let sum=0;
let prompt=require('prompt-sync')();
let num=parseInt(prompt('enter number:'));
while(true){
 if(num<0)
 {
    break;
 }
    sum+=num;
    num=parseInt(prompt('enter number:'));
}
console.log(sum);