//optimized better than singly linked list.
//work from one or the other head or tail based on the index provided
//if index is less than 0 or greater than or equal to the length return null
//if index is less than or equal to the half of the length of the list
    //loop through the list starting from the head and loop towards middle
    //return the node once it is found
//if opposite, loop through backwards
    //return node once found


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
    unshift(val){
        let newNode =new Node(val);
        if(!this.head === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return list
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
}




let list = new DoublyLinkedList()
list.push(0)
list.push(1);
list.push(2)
console.log(list.get(1))
