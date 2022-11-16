//var(ES5) issue @not block scoped eg :
var name='satish';
var a=5,b=3;
if(a>b)
{
    var name="tejas";
    console.log(name);
}
console.log(name);