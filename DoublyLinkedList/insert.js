//optimized because we can go from the back or front
//if index is less than 0 or greater than  the length return false
//if index 0 unshift
//if index is the same as the length push
//use get method to access the index-1
//set the next and prev properties on the correct nodes to link together
//increment length 
//return true

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
    insert(index,val){
        if(index === 0) return !!this.unshift(val);
        if(index < 0 || index > this.length)return false;
        if(index === this.length) return !!this.push(val)
        let newNode = new Node(val)
        let prev = this.get(index -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = temp;
        temp.prev = newNode;
        this.length++;
        return true
    }
}


let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.insert(1,9)
console.log(list)