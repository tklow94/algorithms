//if length is 0 return undefined
//store current head property in a variable
//if length is one set head and tail to be null
//update head to be the next of the old head
//set heads prev property to null
//set old head's next to null
//decrement length
//return old head

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
    shift(){
      if(!this.head)return undefined;
      let oldHead = this.head;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } 
      this.head = oldHead.next;
      this.head.prev = null
      oldHead.next = null
      this.length--
      return oldHead 
    }
}


let list = new DoublyLinkedList()
list.push(0)
list.push(7)
list.shift()
console.log(list)