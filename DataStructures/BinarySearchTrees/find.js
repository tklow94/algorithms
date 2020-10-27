//Similar to inserting, given val, find if it is in the tree. Can do iteratively or recursively

//Start at the root
    //check if there is a root, if not return false
    //if there is a root, check if the value of the new node is the value we are looking for and return true
        //If not check to see if the value is greater than or less than the value of the root
            //Greater: check to see if there is a node to the right
                //if not return false
                //if there is move to that node and repeat these steps
            //Less: check to see if there is a node to the left
                //if not return false
                //if there is move to that node and repeat these steps

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
                    find(val){
                        if(this.root === null) return false;
                        let current = this.root
                        let found = false;
                        while(current && !found){//while there is something to loo through and we haven't found it
                            if(val < current.val){
                                current = current.left;
                            }else if(val > current.val){
                                current = current.right
                            }else{
                                found = true;
                            }
                        }
                        if(!found) return undefined
                        return current;//could also return true
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
console.log(tree.find(20))

