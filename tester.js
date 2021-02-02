class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        }
        this.length++;
        return this
       
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            let newTail = this.tail.prev;
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
        return this;
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

let dll = new DLL();
dll.push(5);
dll.push(4);
dll.push(3);
dll.pop();

console.log(dll);

