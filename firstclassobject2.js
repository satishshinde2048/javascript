function functionReturner(fn){
    return (fn);
}
function temp(name){
    console.log(name); 
}
let mat=functionReturner(temp);
mat('satish');
/*
// Pass as an argument to a function
// Return from a function
// Function definition and invocation
function speak(string) {
    console.log(string);
  }
  speak("Hello");                     // logs "Hello"
  
  // Store in a variable
  var talk = speak;
  talk("Hi");                         // logs "Hi"
function functionReturner(fn) {
    return fn;
  }
  var chat = functionReturner(talk);
  chat("Good Morning");               // logs "Good Morning"*/