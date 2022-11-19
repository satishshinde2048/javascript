//array operation:
let a=[1,2,3,4],b=[6,7,8,9],result;
//1.concat();
result=a.concat(b);
console.log(result);
result=a+ b;
console.log(result);
//sort():
let c=['b','e','a','c'],d=[8,5,9,3];
result=c.sort();
console.log(result);
result=d.sort();
console.log(result);

//push&unshift:
d.push(5);
console.log(d);
d.unshift(1);
console.log(result);

//pop&shift:
c.pop();
console.log(c);
c.shift();
console.log(c);

//index of():
let f=[1,2,3,5,7,9];
console.log(f.indexOf(9));

//filter():
let m=[11,23,45,16,36];
result=m.filter(checkadult);
function checkadult(age){
    return age>=18;
}
console.log(result);

//map:
let n=[4,9,16,25,36];
result=n.map(Math.sqrt);
console.log(result);
result=n.map(multi);
function multi(n){
    return 4+n;
}
console.log(result);

//slice():
let k=[2,3,4,5,6,7];
console.log(k.slice(1,4));

//working:
let s=[4,3,5,6,2];
let v=s;
v.pop();
console.log(v);
console.log(s);