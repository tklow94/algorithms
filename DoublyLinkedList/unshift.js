//if empty head and tail the same
//create new node
//set head.prev to be the new node
//set node.next to be the head
//update the head to be the new node
//length++
//return list


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
}




let list = new DoublyLinkedList()
list.push(0)
list.push(7)
list.unshift(99)
console.log(list)
