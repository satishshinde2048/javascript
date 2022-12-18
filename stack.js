class stacks{
     constructor(capasity){
        this.top=-1;
        this.arr=[];
        this.capasity=capasity;
     };
        Push(item){
            if(this.top==this.capasity-1){
             console.log('stack overflow');
             return;
            }
           this.top++;
           this.arr[this.top]=item;
        }
        Pop(){
            if(this.top==-1){
                console.log('stack is emety');
                return;
            }
          let result= this.arr[this.top];
          this.top--;
          return result;
        }
        Peek(){
            if(this.top==-1){
                console.log('stack is emety');
              return;
            }
           return this.arr[this.top];
        }
        size(){
         return this.top+1;
        }
        isemety(){
         return this.top==-1;
        }
    }
      let  stack=new stacks(3);
      stack.Push(4);
      stack.Push(7);
      stack.Push(1);
      

      //console.log(stack.Pop());
      console.log(stack.Peek());
      console.log(stack.size());
      console.log(stack.isemety());
