//use get method to pass in the index. 
//set value to the value you want to pass in.
//set true/ false depeneding.

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
    set(index,val){
        let result = this.get(index)
        if(result !==null){
            result.val = val;
            return true
        }else{
            return false
        }
    }


}
    
    
    let list = new DoublyLinkedList()
    list.push(0)
    list.push(1)
    list.push(2)
    list.set(1,9)
    console.log(list)