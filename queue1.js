class Queue{
    constructor(capacity){
            this.front=-1;
            this.rear=-1;
            this.size=-1;
            this.arr=[];
            this.capacity=capacity;
        }
        isfull(){
            return this.size==this.capacity-1;
        }
        isempty(){
            return this.rear==this.front;
        }
        
        enqueue(item){
            if(this.size==this.capacity-1){
                console.log('queue is full');
              }
            this.rear=this.rear+1;
            let en=this.arr[this.rear]=item;
            
        //this.size=this.size+1;
            return en;
        }
        dequeue(){
            this.front=this.front+1;
            let de=this.arr[0];
            for(let i=this.front;i<=this.rear;i++){
                this.arr[i]=this.arr[i+1];
            }
            this.rear=this.rear-1;
            return de;
        }
        getrear(){
            return this.arr[this.rear];
        }
        getfront(){
            //this.front=this.front+1;
            return this.arr[0];
        }
}
let queue=new Queue(4);
console.log(queue.enqueue(15));
console.log(queue.enqueue(11));
console.log(queue.enqueue(45));
console.log(queue.enqueue(49));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue(47));
console.log(queue.enqueue(42));
console.log(queue.getrear());
console.log(queue.getfront());
console.log(queue.isfull());
console.log(queue.isempty());