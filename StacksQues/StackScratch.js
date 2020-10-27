//Based on Singly Linked List, can implement with doubly linked list.
//should have shift and unshift methods.
    //basically just coying shift and unshift from singly linked list named as push and pop.


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    //remove from beggining of list
        //if 1 set both to null
        //if none return null
        //else set head equl to next
        //decrement
        //return value of removed
    pop(){
        if(!this.first) return null
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            var removed = this.first
            this.first = this.first.next
        }
        this.length--
        return removed
    }
    //adding to the beggining of a list
    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        this.length++
        return this
    }
}

let stack = new Stack()
stack.push(0)
stack.pop()

console.log(stack)


