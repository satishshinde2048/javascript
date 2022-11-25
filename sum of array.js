/*Input:
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

Output:
627 */
/*let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let result=arr_1.concat(arr_2);
console.log(result);
let sum=0;
let i=0;
while(i<22){
    sum+=result[i];
    i++;
}
console.log(sum);*/

function sum(arr){
    let add=0;
    for(let i=0;i<11;i++)
    {
      add+=arr[i];
    }
    return add;
};
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
console.log(sum(arr_1)+sum(arr_2));