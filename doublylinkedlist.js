class node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}
class List{
    constructor(head=null){
        this.head=head;
        this.tail=head;
        if(head==null){
            this.length=0;
        }
        else{
            this.length=1;
        }
    }
    print(){
        let current=this.head;
        if(this.head==null){
            console.log('emety list'); 
        }
        while(current!=null){
            //console.log(`${current.prev==null?null:current.prev.value}<-${current.value}->${current.next==null?null:current.next.value}`);
           console.log(`${current.value}`);
            current=current.next;
        }
    }
    append(value){
        let newnode=new node(value);
       this.length++;
       if(this.head==null){
        this.head=newnode;
        this.tail=newnode;
        return tjhis
       }
       this.tail.next=newnode;
       newnode.prev=this.tail;
       this.tail=newnode;
       return this;
    }
    insertatbegining(value){
        let newnode=new node(value);
       this.length++;
       if(this.head==null){
        this.head=newnode;
        this.tail=newnode;
        return this;
       }
      newnode.next=this.head;
      this.head.prev=newnode;
      this.head=newnode;
      return this;
    }
    insertatindex(value,index){
        let newnode=new node(value);
        if(this.head==null){
            this.head=newnode;
        this.tail=newnode;
        return this;
        }
        if(index==0){
            this.insertatbegining(value);
        }
        let counter=0;
        let current=this.head;
        let previous;
        while(counter<index){
            previous=current;
            current=current.next;
            counter++;
        }
        newnode.next=current;
        previous.next=newnode;
        current.prev=newnode;
        newnode.prev=previous;
        return this;
    }
    getat(index){
       let counter=0;
       let current=this.head;
       while(current!=null){
        if(counter==index){
            return current;
        }
        current=current.next;
        counter++;
       }
       return null;
    }
    deletefrombeging(){
       this.head=this.head.next;
       this.head.prev=null;
       return;
    }
    deletelastnode(){
        if(this.head.next==null&&this.head.previous==null){
            this.head=null;
            return;
        }
        let previous;
        let current=this.head;
        while(current.next!=null){
            previous=current;
            current=current.next;
        }
        previous.next=null;
        this.tail=previous;
    }
    deletefromindex(index){
        let counter=0;
        let current=this.head;
        let previous;
        while(counter<index){
            previous=current;
            current=current.next;
            counter++;
        }
        previous.next=previous.next.next;
}
indexof(element){
   let index=0;
   let current=this.head;
   while(current!=null){
    if(element==current.value){
        return index;
    }
    index++;
    current=current.next;
   }
   return -1;
}
}
let newnode=new node(12);
let list=new List(newnode);
list.append(23).append(27)
list.insertatbegining(5);
list.insertatindex(13,2);
console.log(list.getat(2));
list.deletefrombeging();
list.deletelastnode();
list.deletefromindex(1);
console.log(list.indexof(23));
list.print();