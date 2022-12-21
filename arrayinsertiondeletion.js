class Array{
    constructor(capacity){
            this.index=-1;
            this.arr=[];
            this.capacity=capacity;
        }
        isfull(){
            return this.index==this.capacity-1;
        }
        isempty(){
            return this.index==-1;
        }
        insertion(item){
            if(this.index==this.capacity-1){
                console.log('array is full');
            }
            this.index=this.index+1;
            let insert=this.arr[this.index]=item;
            return insert;
        }
        deletion(){
            if(this.index==-1){
                console.log('empty queue');
            }
            let de=this.arr[this.index];
            this.index--;
            return de;
        }
    }
    let array=new Array(4);
    console.log(array.insertion(10));
    console.log(array.insertion(20));
    console.log(array.insertion(30));
    console.log(array.insertion(40));
   
    console.log(array.deletion());
    console.log(array.insertion(50));
