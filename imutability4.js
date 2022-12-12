function getname(param,location){
    return Object.assign({},param,{
        location:location,
    })
}
let data={
    country:'india'
}
let result=getname(data,'pune');
console.log(result);
console.log(data);
