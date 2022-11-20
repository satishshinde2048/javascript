let a=new Map([['satish',25],['tejas',35]])
console.log(a);
console.log(a.has());
//add element:
a.set('ram',34);
a.set('raj',38);
console.log(a);
//delete():
a.delete('satish');
console.log(a);
//get():
console.log(a.get('raj'));
//forEach():
let text='';
a.forEach(function(value){
text+=value;
});
console.log(text);
//values();
let c=a.values();
let test='';
for(let entery of c){
    test+=entery;
}
console.log(test);
//keys():
let d=a.keys();
let temp='';
for(let entery of d){
    temp+=entery;
}
console.log(temp);
//entries();
let e=a.entries();
let temp1='';
for(let entery of e){
    temp1+=entery;
}
console.log(temp1);
