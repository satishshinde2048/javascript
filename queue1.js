class Queue{
    constructor(capacity){
            this.front=-1;
            this.rear=-1;
            this.arr=[];
            this.capacity=capacity;
        }
        isfull(){
            return this.rear==this.capacity-1;
        }
        isempty(){
            return this.rear==this.front;
        }
        enqueue(item){
            if(this.rear==this.capacity-1){
                console.log('queue is full');
              }
            this.rear=this.rear+1;
            let en=this.arr[this.rear]=item;
            return en;
        }
        dequeue(){
            this.front=this.front+1;
            let de=this.arr[this.front];
            return de;
        }
        getrear(){
            return this.arr[this.rear];
        }
        getfront(){
            return this.arr[this.front];
        }
}
let queue=new Queue(4);
console.log(queue.enqueue(15));
console.log(queue.enqueue(11));
console.log(queue.enqueue(45));
console.log(queue.enqueue(49));
console.log(queue.enqueue(50));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue(41));
console.log(queue.enqueue(53));
console.log(queue.getrear());
console.log(queue.getfront());
console.log(queue.isfull());
console.log(queue.isempty());