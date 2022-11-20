let a='{"name":"satish","age":22}';
console.log(a);
let d=JSON.parse(a);
console.log(d);
//acess:
console.log(a.name);
console.log(a['name']);

//json array=>
let b=[
    { "name":'satish',"age":34},
    { "name":'ram',"age":36},
]
console.log(b);

// json object
const g = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const f = JSON.parse(g);

// accessing the data
console.log(f); // John

//stringify():
let c={
    name:"satish",
    id:1125
}; 
for(let key in c)
console.log(key);
console.log(c.name);
console.log(c['name']);
let v=JSON.stringify(c);
console.log(v);

let student={
    name:'raj',
    id:3746,
    age:25
}
let temp=JSON.stringify(student,['id','age']);
console.log(temp);