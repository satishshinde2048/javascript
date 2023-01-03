class node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class List{
    constructor(head=null){
        this.head=head;
        this.tail=head;
        if(this.head==null){
            this.length=0;
        }
        else{
            this.length=1;
        }
    }
    
    print(){
        let counter=0;
        if(this.head==null){
            console.log('list is empty');
        }
        let current=this.head;
        while(counter<this.length){
            console.log(`${current.prev.value}${current.value}${current.next.value}`);
            //console.log(current.prev);
            current=current.next;
            counter++;
        }
    }
    append(value){
        let newnode=new node(value);
        this.length+=1;
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
            return this;
        }
        this.tail.next=newnode;
        newnode.prev=this.tail;
        this.tail=newnode;
        this.tail.next=this.head;
        this.head.prev=this.tail;
        return this;
        
    }
    insertatfront(value){
        let newnode=new node(value);
        this.length+=1;
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
            return this;
        }
       newnode.next=this.head;
       this.head.prev=newnode;
       this.head=newnode;
       this.tail.next=this.head;
        this.head.prev=this.tail;
    }
    deleteatbegining(){
        this.length-=1;
        if(this.head===null){
            return null;
        }
        this.head=this.head.next;
        this.tail.next=this.head;
        this.head.prev=this.tail;
    }
    deletefromlast(){
        this.length-=1;
        let counter=0;
        let current=this.head;
        let previous;
        while(counter<this.length){
            previous=current;
            current=current.next;
            counter++;
        }
        this.tail=previous;
        this.tail.next=this.head;
        this.head.prev=this.tail;
    }
}
let newnode=new node(100);
let list=new List(newnode);
list.append(200).append(300).append(400);
list.insertatfront(50);
list.deleteatbegining();
list.deletefromlast();
list.print();