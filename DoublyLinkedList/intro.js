//Add a pointer so each node has two pointers, one in front and one in back
//Much easier to reverse in a doubly linked list because we can start backwards
//In general, takes up more memory, but we have better flexibility.


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
}


first = new Node(12);
first.next= new Node(13);
first.next.prev = first
console.log(first)


