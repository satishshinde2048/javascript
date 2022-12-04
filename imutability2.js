function newstate(param,location){
   return Object.assign({},param,{
    location:location
   });
}
let data={
    country:'india'
}
let temp=newstate(data,'pune');
console.log(temp);
console.log(data);
