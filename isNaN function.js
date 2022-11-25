/*Input:
var var1 = 50; var var2 = "42F";

Output:
50 is a valid number. 42F is not a number. */
var var1 = 50; 
var var2 = "42F";
if(isNaN(var1)?console.log(`${var1} is not a valid number.`):console.log(`${var1} is a valid number.`));
if(isNaN(var1)?console.log(`${var2} is not a valid number.`):console.log(`${var2} is a valid number.`));

var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }

        var grade='C';
var result;
switch(grade) {
case'A': {
result+="10";
break;
}
case'B': {
result+=" 9";
break;
}
case'C': {
result+=" 8";
break;
}
default:
result+=" 0";
}
console.log(result);

var grade='Z';
var result;
switch(grade) {
case'A':
result+="10";
case'B':
result+=" 9";
case'C':
result+=" 8";
default:
result+=" 0";
}
console.log(result);

function gfg() {
    let val1 = 5;
   
    console.log(val1 == 5);
    console.log(val1 > 0);
    }
    gfg();

    var i = 20;
 
if (i == 10)
  console.log("i is 10");
else if (i == 15)
console.log("i is 15");
else if (i == 20)
console.log("i is 20");
else
console.log("i is not present");

let f = 9;
   
    switch (f)
    {
       case 0:
           console.log("i is zero.");
           break;
       case 1:
           console.log("i is one.");
           break;
       case 2:
           console.log("i is two.");
           break;
       default:
           console.log("i is greater than 2.");
    }