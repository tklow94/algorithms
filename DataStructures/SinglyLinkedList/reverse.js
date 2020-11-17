//reverse linked list in place(no copy) Traverse and reverse
//Pseudo: swap head and tail
//create a next, prev, and node variable.
    //node is initialized to be the new head property
//Loop through list
    //set next to be the next property on whatever node is
    //set next property on the node to be whatever prev is
    //set prev to be the value of the node variable
    //set node variable to be the value of the next variable

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
        reverseList(){
            let node = this.head;
            this.head = this.tail;
            this.tail = node;
            let prev = null;
            let next = null;
            for(let i = 0; i< this.length; i++){
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
            return this
        }
    }
    
    
    let list = new SinglyLinkedList()
    list.push(0)
    list.push(1)
console.log(list)
console.log(list.reverse())





//Big O of Singly Linked Lists
    //insertion: O(1) Beats array
    //Removal: O(1) beg or O(n)end Beats array at beg
    //Searching: O(n) Array beats
    //Access- O(n) Array beats