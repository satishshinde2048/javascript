//set:
let a=new Set([1,2,5,3,4,5,6,8,6]);
console.log(a);

//add element:
let b=new Set();
console.log(b.has());
b.add(1);
b.add(4);
b.add(7);
console.log(b)
//delete():
b.delete(4);
console.log(b);

//forEach():
let d=new Set([2,4,7,3,'sat','mat']);
let text="";
d.forEach(function(value){
text+=value;
});
console.log(text);

//values():
let m=d.values();
let temp="";
for(let entery of d){
    temp+=entery;
}
console.log(temp);

//entries():
let n=d.entries();
let test="";
for(let entery of n){
    test+=entery;
}
console.log(test);

//keys():
let g=d.values();
let greet="";
for(let entery of d){
    greet+=entery;
}
console.log(greet);