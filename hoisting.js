//hoisting:
function greet(){
    b='hello satish';
    console.log(b);
    var b;
}
greet();

//function:
greet();
function greet(){
    console.log("hello");
    
}

function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  var a=add(3)(4);
 console.log(a);
  //initialiseClosure

  function multi(){
    let obj={name:'satish',age:25}
    return function(){
        console.log('my name is'+' '+obj.name);
    }
  }
  let initialiseClosure=multi();
  initialiseClosure();
  