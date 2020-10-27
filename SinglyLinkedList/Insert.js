//If the index is less than zero or greter than the length return false
//If the index is the same as the length, use push method
//If index is 0 use unshift method
//Else use get to access node at index -1
    //set next property to the new node
    //set next property on the new node to be thre previous next
    //increment length
    //return true
//It would be nice to fix it so that any return gives T/F for unshift and push they don't at the moment
    //! converts things to return boolean values ! is falsey !! is truthy
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head)return undefined;
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift(){
        if(!this.head)return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === 0 ) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)
        let newNode = new Node(val)
       let prev = this.get(index -1);
       let temp = prev.next
       prev.next = newNode;
       newNode.next = temp;
       this.length++;
       return true
    }
    remove(index){

    }
}


let list = new SinglyLinkedList()
list.push(0)
list.push(1)
list.unshift(2)
list.insert(1,9)

console.log(list.insert(-1,9))