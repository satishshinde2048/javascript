/*Input:
Input:
const input = [1,[2,[3,[4,[5,[6,[7]]]]]]];

Output:
[ 1, 2, 3, 4, 5, 6, 7 ] */
const input = [1,[2,[3,[4,[5,[6,[7]]]]]]];
let result=[];
function show(arr){
for(let i=0;i<arr.length;i++)
{
    if(Array.isArray(arr[i])){
        show(arr[i]);
    }
    else{
        result.push(arr[i]);
    }
}
}
show(input);
console.log(result);