let count=0;
function count1(){
    let id=setInterval(()=>{
    count+=2;
    if(count==12)
    {
        clearInterval(id);
    }
    else{
        console.log(count)
    }
    },1000)
}
count1();

const n1 = Promise.resolve(25) ;
const n2 = Promise.resolve(69);
function test(arr){
    arr.forEach(function(element){
        element.then(function(value){
        if(value>42){
            console.log(" This is resolved!");
        }
        else{
              console.log("This is rejected!");
        }
             }     )
    })

}
test([n1,n2])