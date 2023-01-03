class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linkedlist{
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
    append(value){
        let newnode=new node(value);
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
        }
        else{
            this.tail.next=newnode;
            this.tail=newnode;
        }
        this.length++;
    }
    insertatbegining(value){
        let newnode=new node(value);
        newnode.next=this.head;
        this.head=newnode;
        this.length++;
    }
    print(){
        let current=this.head;
        if(current==null){
            console.log('list is empty');
        }
        while(current!=null){
            console.log(current.value);
            current=current.next;
        }
    }
    getat(index){
        let counter=0;
        let current=this.head;
        while(current!=null){
            if(counter==index){
                return current;
            }
            counter++;
            current=current.next;
        }
        return null;
    }
    insertat(value,index){
        
        if(this.head==null){
            this.head=new node(value);
            return;
        }
        if(index==0){
            this.insertatbegining(value);
            return;
        }
        let previous=this.getat(index-1);
        let newnode=new node(value);
        newnode.next=previous.next;
        previous.next=newnode;
        this.length++;
    }
    deletefrombegining(){
        if(this.head==null){
            return;
        }
        this.head=this.head.next;
        return;
        this.length--;
    }
    deletelastnode(){
        if(this.head.next==null){
            this.head=null;
            return;
        }
       let previous=this.head;
        let current=this.head.next;
        while(current.next!==null){
            previous=current;
            current=current.next;
        }
        previous.next=null;
        this.tail=previous;
        this.length--;
    }
    deleteat(index){
        if(this.head==null){
            return;
        }
        if(index==0){
            this.deletefrombegining();
        }
        let previous=this.getat(index-1);
        if(previous==null||previous.next==null){
            return;
        }
        previous.next=previous.next.next;
        this.length--;
    }
    size(){
        //return this.length-1;
        let counter=0;
        let current=this.head;
        while(current!=null){
            counter++;
            current=current.next;
        }
        return counter;
    }
    gethead(){
        return this.head;
    }
    getlastnode(){
        let counter=0;
        let current=this.head;
        while(current.next!=null){
            counter++;
            current=current.next;
        }
         return current;
    }
}
let newnode=new node(500);
let newlist=new linkedlist(newnode);
newlist.append(100);
newlist.append(200);
newlist.append(300);
newlist.insertatbegining(600); 

console.log(newlist.getat(0));
newlist.insertat(5001,2);
newlist.deletefrombegining();
newlist.deletelastnode();
newlist.deleteat(1);
newlist.print();
console.log(newlist.size());
console.log(newlist.gethead());
console.log(newlist.getlastnode());