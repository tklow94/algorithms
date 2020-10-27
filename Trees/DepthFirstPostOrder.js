//like DFSPreOrder but look at all the nodes on one side until reach the end then add from bottom up
//still need helper to traverse the tree

//Only difference is push value of the node to the variable taht stores the values after the if statements.

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
DFSPost(){
 let data = []
 let current = this.root;
 function traverse(node){
     if(node.left) traverse(node.left);
     if(node.right) traverse(node.right);
     data.push(node.val)
 }
 traverse(current);
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
console.log(tree.DFSPost())