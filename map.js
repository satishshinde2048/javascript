/*let strings = ["avengers", "captain america", "ironman", "black panther"];

Output:
["AVENGERS","CAPTAIN AMERICA","IRONMAN","BLACK PANTHER"]*/


/*let strings =["avengers", "captain america", "ironman", "black panther"];
let result=strings.map(upper);
function upper(strings){
return strings.toUpperCase();
}
console.log(result);*/
let strings =["avengers", "captain america", "ironman", "black panther"];
let result=strings.map((string)=>{ return string.toUpperCase()});
console.log(result);