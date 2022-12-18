class Stack{
    constructor(){
        this.arr=[];
    }
    add(item){
        return this.arr.push(item);
    }
    remove(){
        return this.arr.pop();
    }
    peek(){
        return this.arr[this.arr.length-1];
    }
    size(){
        return this.arr.length; 
    }
    isemety(){
        return this.arr.length==0;
    }
}
let stack=new Stack();
stack.add(3);
stack.add(5);
stack.add(2);
console.log(stack.remove());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isemety());