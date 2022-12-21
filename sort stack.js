function sortstack(input){
    let stack=[];
    while(input.length>0){
        let temp=input.pop();
        while(stack.length>0&&stack[stack.length-1]>temp){
            input.push(stack[stack.length-1]);
            stack.pop();
        }
        stack.push(temp);
    }
     return stack;
}
let input=[4,2,1,7,5];
let test=sortstack(input);
console.log(test);