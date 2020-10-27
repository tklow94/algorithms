//Much easier to remove end on a doubly linked list because we can work backwards.
//start at the tail and use .prev to remove.

//if there is no head return null
//else store the current tail in a var
    //if length is 1 set head and tail to be null
    //update tail to be the previous node
    //set newTail.next to null and removed.prev to null
    //decrement length by 1
    //return removed tail

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode;
      
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head)return undefined;
        let currentTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail= null;
        }
        this.tail = currentTail.prev
        this.tail.next = null
        this.length--;
        return currentTail
    }
}


let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.pop()
console.log(list)