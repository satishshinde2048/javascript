let b=[45,67,89,34];
for(let i of b){
    console.log(i);
}
 
let string2='sham';
for(let i of string2){
    console.log(i);
}

let set=new Set([12,23,45,56]);
for(let i of set){
    console.log(i);
}

let map=new Map([['name','satish'],['age',22]]);
for(let [key,value] of map){
    console.log(key+'-'+value);
}