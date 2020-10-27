//Based on a singly linked list. But can use Doubly.
//Could add to beg and remove from end or vic versa
    //Prefer to remove from beg and add to end because we have to traverse the linked list and make it not constant time.
//enqueue is add to end (push)
//dequeue is remove from beggining ((shift)


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
         this.last.next = newNode;
         this.last = newNode
        }
        this.length++;
        return this
    }
    dequeue(){
        if(!this.first) return null;
        if(this.length === 0){
            this.first = null;
            this.last = null;
        }else{
            var current = this.first
            this.first = this.first.next
        }
        this.length--
        return current
    }
}

let list = new Queue()
list.enqueue(0)
list.enqueue(1)
list.dequeue()
console.log(list)