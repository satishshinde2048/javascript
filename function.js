//decleration=
function greet(){
    console.log('hello satish');
}
//call=
greet();


function sayThanks(name='customer'){//default parameter
    console.log('Thank you for your purchase'+' '+name+''+'! We appreciate your business.');
}
sayThanks('satish');
sayThanks();

function calculatearea(width,height){//parameter
  return width*height;
}
let width=10,height=5;
let a=calculatearea(width,height);//argument
console.log(a);

//return
function calculatearea(width,height){//parameter
    let area=width*height;
    return area
  }
  let b=calculatearea(10,5);
  console.log(b);

  function calculatearea(width,height){//parameter
    if(width<0||height<0){
        return 'enter positive value';
    }
    let area=width*height;
    return area
  }
  let c=calculatearea(10,-5);
  console.log(c);

function monitorCount(rows,columns){
return rows * columns
}
const numOfMonitors=monitorCount(5,4);
console.log(numOfMonitors);

//helper function:
function multi(number){
    return number*9/5;
}
function get(celcius){
    return multi(celcius)+32;
}
let d=get(15);
console.log(d);

//function expression:
function area(width,hieght){
    return width*height;
} 
let p=area(10,10);
console.log(p);