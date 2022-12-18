class Queue{
    constructor(capacity){
    this.front=0;
    this.size=0;
    this.arr=[];
    this.capacity=capacity;
}
isempty(){
    return this.size==0;
}
isfull(){
  return this.size==this.capacity
}
enqueue(item){
if(this.size==this.capacity){
    console.log('queue is full');
  }
 this.rear=this.front+this.size-1%this.capacity;
 this.rear=this.rear+1;
 let en=this.arr[this.rear]=item;
 this.size=this.size+1;
 console.log(en);
}
dequeue(){
    if(this.isempty()){
        console.log('queue is empty');
    }
    let de=this.arr[this.front];
    this.front=this.front+1;
    this.size=this.size-1;
    return de;
}
getrear(){
    this.rear=(this.front+this.size-1)%this.capacity;
 return this.arr[this.rear];

}
getfront(){
 return this.arr[this.front];
}
}
let queue=new Queue(4);
queue.enqueue(10);
queue.enqueue(16);
queue.enqueue(40);
queue.enqueue(12);

console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(44);
console.log(queue.getrear());
console.log(queue.getfront());
console.log(queue.isfull());
console.log(queue.isempty());