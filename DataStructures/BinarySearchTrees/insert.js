//adds newNode in the correct spot.

//Create a new node
//Start at the root
    //if there is no root, root is the new node
    //if there is a root check if the value of the new node is greater than or less than the value of the root.
        //if greater check to see if there is a node to the right
            //if there is move to that node and repeat these steps.
            //if there is not, add that node as the right property.
        //if it is less check to see if there is a node to the left
            //if there is move to that node and repeat these steps.
            //if not, add that node as the left property
    //return the tree

    //need to address infinite loop by changing value to false (adding duplicate numbers)


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
                        current = current.left //moving the current
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
}

let tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(2)
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(7)


