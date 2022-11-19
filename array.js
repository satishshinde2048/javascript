//array:
let array=['satish','tejas','ravi'];//string
console.log(array);
array=[1,2,3,4,5];//number
console.log(array);
array=[1,'satish',2,'tejas',true];//mixed
console.log(array);
array=[];
console.log(array);

//crete array:
//1.literal[]:
let  a1=[1,2,true,null,'satish'];
console.log(a1);
//2.new Array():
let a2=new Array(1,2,'satish',true);
console.log(a2);

//store array function object inside the array:
let a3=[
    {name:'satish'},//obj
    [1,2,3,'raj'],
    function hello(){console.log('hello satish')}
];
console.log(a3);

//acess element of array:
let a4=[1,2,'satish','tejas',true];
console.log(a4[0],a4[4]); 

//add element to array:push()&unshift()-
let b1=[1,2,'satish'];
b1.push('tejas');//push
console.log(b1);
b1.unshift('raj');
console.log(b1);

//add or change of element:
let b2=[1,2,'satish'];
b2[0]='raj';
console.log(b2);
b2[4]='ram';
console.log(b2);

//remove element:
let b3=[1,2,'satish',5];
b3.pop();
console.log(b3);
b3.shift();
console.log(b3);

//length:
let b4=[1,2,3,4,'atishs'];
console.log(b4.length);


