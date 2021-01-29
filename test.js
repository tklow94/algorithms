class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this
        }
    
    pop() {
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current; //newTail
            current = current.next; //removed tails
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift() {
        if(!this.head){
            return undefined;
        }
       let newHead = this.head.next;
       let removed = this.head;
        this.head = newHead;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return removed;
    }
    unShift(val) {
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            let next = this.head;
            this.head = node;
            this.head.next = next;
        }
        this.length++;
        return this
    }
    get(index){
        if(this.length < index || index >= this.length){
            return undefined;
        }else {
            let i = 0;
            let target = this.head;
           while(i != index){
                target = target.next;
               i++;
           }
           return target;
        }
    }
    set(index, val) {
       let node = this.get(index);
       if(node) {
           node.val = val;
           return node;
       }
       return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length){
            return false;
        }
        if(index == 0) return !!this.unShift(val);
        if(index == this.length) return !!this.push(val);
        let node = new Node(val);
        let prev = this.get(index -1);
        let temp = prev.next;
        prev.next = node;
        node.next = temp;
        this.length++
        return this
    }
    remove(index) {
        if(index < 0 || index > this.length){
            return false;
        }
        if(index == 0 )return !!this.shift(index);
        if(index == this.length) return !!this.pop(index);
        let prev = this.get(index -1);
        let remove = prev.next;
        let next = remove.next;
        prev.next = next;
        this.length--;
        return this
    }
    reverse(){
        let node = this.head;

        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next = null;

        while(node){
           
            next = node.next;
            node.next = prev;

            prev = node;
            node = next;
        }
        return this;
    
}
}

let list = new SLL();
list.push(5);
list.push(4);
list.push(3);
list.push(2);
console.log(list.reverse())






