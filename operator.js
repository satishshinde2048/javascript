//arithematic operator:
let x=10,y=5,result;
result=x+y;//add
console.log(result);
result=x-y;//sub
console.log(result);
result=x*y;//multi
console.log(result);
result=x/y;//div
console.log(result);
result=x%y;//reminder
console.log(result);
result=x**y;//expontial
console.log(result);

//incerement and decrement
result=++x;//pre increment
console.log(result);
result=x++;//post increment
console.log(result);
result=++x;//pre increment
console.log(result);
result=--y;//pre decrement
console.log(result);
result=y--;//post decrement
console.log(result);

//assignment(=) operator:
let a=10,b=5;
console.log(a);
a+=b;            //a=a+b;
console.log(a);
a-=b;            //a=a+-b;
console.log(a);
a*=b;            //a=a*b;
console.log(a);
a/=b;            //a=a/b;
console.log(a);
a**=b;            //a=a**b;
console.log(a);
a%=b;            //a=a%b;
console.log(a);

//comparision operator:
let c=10,d=10,e='10',f=12,g=8;
console.log(c<f);  
console.log(c>g); 
console.log(c<=d);  
console.log(c>=d); 
console.log(c==d); 
console.log(c!=f); 
console.log(c===d); 
console.log(c!==e); 
console.log(c==e); 
console.log(c===e); 

//logical operator:
//1.AND:t&&t=t
let m=4,n=5;
if(m>2&&n<6)            
{
console.log('hello');
}
//2.OR:t||f=t,t||t=t,f||t=t
if(m>2||n<4)
{
   console.log('hello');
}
//.NOT:!true=false
console.log(!true)

//other js operator:
let z=(1,2,4,5,6);
console.log(z);
console.log(typeof NaN);
if(m>2 ?console.log(true) :console.log(false));
if(m>6 ?console.log(true) :console.log(false));