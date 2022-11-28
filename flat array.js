const input = [1,[2,[3,[4,[5,[6,[7]]]]]]];
console.log(input.flat(6));
let input1=[[1,2,3],[6,3,4,9],[1,7,3,4]]
let array=[].concat(...input1);
console.log(array);
let temp=[].concat.apply([],input1);
console.log(temp); 
let result=input1.reduce((acc,curval)=>{
    return acc.concat(curval);
},[])
console.log(result);