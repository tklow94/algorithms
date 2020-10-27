//traverse nodes vertically until visiting sibling nodes
    //Three different types of these
//Sticking with binary trees
//PreOrder
    //visit first node
        //Explore the left side
            //explore left
            //explore right
    //visit second node
        //explore right
            //explore right
            //explore left
//We will be doing this recursively it is easier and shorter than iteratively.

//create a variable to store the values of the nodes visited
//store the root of the BST in a variabled called current
//Write a helper function which accets a node
    //push the value of the node to the variable that stores the values
    //if the node has a left property, call the helper function with the left property on the node
    //if the node has a right property call the helperwith the right property on the node.

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
    DFSPre(){
        let data = [];
        let current = this.root
        function traverse(node){
            data.push(node.val)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
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
console.log(tree.DFSPre())