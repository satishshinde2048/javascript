let str = '';

loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str); 

var size=5;
var x=5;
var size=4;
for(var j=size;j>=0;j--)
{
console.log(x);
xx=x-2;
}

var a=0;
var b =0;
while (a <3)
{
a++;
b += a;
console.log(b);
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

var x=0;
for(x;x<10;x++);
console.log(x);

