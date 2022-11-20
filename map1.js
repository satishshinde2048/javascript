/*Input:
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

Output:
["exuberant", destruction", "present"]*/
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let result=inputWords.filter((string)=>{return string.length>5});
console.log(result);