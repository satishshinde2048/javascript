let fname,lname,fullname;
fname='satish';//single quate
lname="shinde";//double quao
fullname=`my name is ${fname} ${lname}.`;//backticks
console.log(fullname);

let name='i am "satish"';
console.log(name);

//acess sring:
let a='satish';
console.log(a[0],a[5]);
console.log(a.charAt(1),a.charAt(4));

//string are imutable:
a[0]='S';
console.log(a);

//same varible name:
a="SATISH";
console.log(a);

//case sensetive:
let m='raj',n='RAJ';
console.log(m==n);

//length
console.log(m.length)

//crete string using new word:
let k='satish';
let l=new String('ram');
console.log(k);
console.log(l);
console.log(typeof k);
console.log(typeof l);

//operation on string
let t1='satish',t2='shinde',t3='   chandaj  ',result,t4='tejas kambale',t5='RAJ';
//1.concat():
result=t1.concat(" ",t2);
console.log(result);
//2.replace:
result=t4.replace('kambale','shinde')
console.log(result);
//3.trim():
result=t3.trim();
console.log(result);
//4.split():
result=t4.split();
console.log(result);
//5.substr():
result=t1.substring(0,2);
console.log(result);
//6.slice():
result=t1.slice(1,2);
console.log(result);
//7.toUpperCase():
result=t1.toUpperCase();
console.log(result);
//8.toLowerCase():
result=t5.toLowerCase();
console.log(result);

result=t1 + t2;
console.log(result);

result='i am \'satish\'';
console.log(result);

t1+=' shinde';
console.log(t1);

//revrse string:
let string='satish shinde';
let reversesentance=reversebyseparator(string,"");
console.log(reversesentance);
let reverseword=reversebyseparator(reversesentance," ")
console.log(reverseword);
function reversebyseparator(string,separator){
    return string.split(separator).reverse().join(separator);
}

//spread operator:
let s=[1,2,3,4];
let b=[6,7,8,9];
let c=[...s,...b];
console.log(c);

//reverse string:
let g='satish shinde';
let h=g.length;
console.log(h);
for(let i=g.length-1;i>=0;i--)
{
    console.log(g[i]);
}
