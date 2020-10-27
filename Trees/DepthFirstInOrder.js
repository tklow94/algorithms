//travers entire left side then visit the node then traverse the entire right side.
    //Same as others but in helper check left, push, then right. The output ends up being all the numbers in numerical order.

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
    DFSIn(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right)
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
console.log(tree.DFSIn())