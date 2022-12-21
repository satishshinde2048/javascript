class stack{
    constructor(capasity){
     this.top=-1;
     this.arr=[];
     this.capasity=capasity;
    }
    push(item){
        if(this.top==this.capasity-1){
            console.log('stack is overflow');
            return;
        }
        this.top++;
         this.arr[this.top]=item;
    }
    pop(){
        if(this.top==-1){
            console.log('array is emety');
            return;
        }
       let result=this.arr[this.top];
       this.top--;
       return result;
    }
    peek(){
        if(this.top==-1){
            console.log('array is emety');
            return;
        }
        return this.arr[this.top];
    }
    size(){
        return this.top+1;
    }
    isemepty(){
        return this.top==-1;
    }
}
let stack1=new stack(6);
stack1.push(5);
stack1.push(6);
stack1.push(7);
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.size());
console.log(stack1.isemepty());


/*this.front=this.front+1;
            let de=this.arr[this.front];
            return de;*/