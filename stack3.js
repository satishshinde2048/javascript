class Stack{
    constructor(capacity){
        this.top=-1;
        this.arr=[];
        this.capacity=capacity;
    }
    push(item){
      if(this.top==this.capacity-1){
        console.log('stack overflow');
      }
      this.top++;
      this.arr[this.top]=item;
    }
    pop(){
        if(this.top==-1){
            console.log('emety stack');
        }
        let result=this.arr[this.top];
        this.top--;
        return result;
    }
    peek(){
        if(this.top==-1){
            console.log('emety stack');
        }
      return this.arr[this.top];
    }
    size(){
      return this.top+1;  
    }
    isempty(){
        return this.top==-1;
    }
    clear(){
        return this.arr=[];
    }
}
let stack=new Stack(3);
stack.push(8);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isempty());
console.log(stack.clear());