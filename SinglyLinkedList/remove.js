//if index is less than zero or greater than the length return null
//if the index is the same as the length -1, pop
//if index is zero, shift
//else use get method to access index-1
    //set next property on that node to the be the next of the next node
    //length--
    //return value of the node removed.
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
            if(index < 0 || index >= this.length) return null;
            if(index === 0) return this.shift()
            if(index === this.length -1) return this.pop()
            let prev = this.get(index -1);
            let removal = prev.next;
            prev.next = removal.next
            this.length--;
            return removal
        }
    }
    
    
    let list = new SinglyLinkedList()
    list.push(0)
    list.push(1)
    list.remove(1)
console.log(list)