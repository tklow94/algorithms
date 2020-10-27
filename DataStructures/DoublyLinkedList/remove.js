//goes both ways to optimize over singly linked list.
//check for invalid index
//if index is 0 shift
//if index = length -1 use pop
//Use get method
//update next and prev values to remove node from list
//set next and prev to null on found node.
//decrement 
//return removed

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
    get(index){
    if(index < 0 || index >= this.length) return null
    if(index <= this.length/2){
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }else{
        let count = this.length - 1
        let current = this.tail
        while(count !== index){
            current = current.prev
            count--
        }
        return current
    }
    }
    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0 )return this.shift();
        if(index === this.length - 1) return this.pop();
        let removed = this.get(index);
        let next = removed.next;
        let prev = removed.prev;
        next.prev = prev;
        prev.next = next;
        removed.next = null;
        removed.prev = null;
        this.length--
        return removed
    }
  
}


let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.remove(1)
console.log(list)