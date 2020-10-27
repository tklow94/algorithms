//find tail
//make new node
//if list is empty set both to new Node
//else set next property on tail to be the new node
//set the previous property on the newly created node to be the tail
//set the tail to be the newly created node.
//increment length
//return entire list


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
}


let list = new DoublyLinkedList()
list.push(0)
list.push(7)
console.log(list)