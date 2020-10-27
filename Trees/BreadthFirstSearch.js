//---> looks like this, visit all nodes on the same level before look at child, look at all siblings.


//create a queue (FIFO), for this case we will use a simple array and a variable to store the values of the nodes visited.
//Place the root node in the queue
//Loop as long as there is anything in the queue
    //Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
    //If there is a left property on the node dequeued add it to the queue
    //if there is a right property on the node dequeued add it to the queue.
//Return data


                class Node{
                    constructor(val){
                        this.val = val;
                        this.left = null;
                        this.right = null;
                    }
                }
                
                class BST{
                    constructor(){
                        this.root = null;
                    }
                    insert(val){
                        let newNode = new Node(val)
                        if(!this.root){
                            this.root = newNode
                            return this
                        }else{
                            let current = this.root;//update current as we go
                            while(true){
                                if(val === current.val) return undefined
                                if(val < current.val){
                                    if(current.left === null){
                                        current.left = newNode;
                                        return this; // break out of loop
                                    }else{
                                        current = current.left 
                                    }
                                }else if(val >current.val){
                                    if(current.right === null){
                                        current.right = newNode;
                                        return this
                                    }else{
                                        current = current.right;
                                    }
                                }
                            }
                        }
                        
                
                    }
                    find(val){
                        if(this.root === null) return false;
                        let current = this.root
                        let found = false;
                        while(current && !found){
                            if(val < current.val){
                                current = current.left;
                            }else if(val > current.val){
                                current = current.right
                            }else{
                                found = true;
                            }
                        }
                        if(!found) return undefined
                        return current;
                    }
    BFS(){
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)
        while(queue.length){//while there is something in the queue
            node = queue.shift();
            data.push(node.val);//adds into list we return
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
       console.log(data)

     }
}
                
                let tree = new BST();
                tree.insert(10)
                tree.insert(5)
                tree.insert(2)
                tree.insert(13);
                tree.insert(11);
                tree.insert(16);
                tree.insert(7)
console.log(tree.BFS())

//


