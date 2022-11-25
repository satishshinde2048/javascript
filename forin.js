let student={
    name:'satish',
    age:15,
    id:20254
};
for(let i in student){
    console.log(i);
    console.log(`${i}=>${student[i]}`);
    let student1="$"+student[i];
    console.log(`${i}=>${student1}`);
}

let string='satish';
string='ram';
let m=string.length;
console.log(m);
for(let i in string){
    console.log(string[i]);
}

let arr=[12,23,45,67];
arr=[23,21,45];
let n=string.length;
console.log(n);
for(let i in arr){
    console.log(arr[i]);
}

