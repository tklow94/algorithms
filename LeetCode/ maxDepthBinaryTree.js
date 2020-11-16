//Given a binary tree, find its maximum depth.
//The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//Do I have to represent this as a BST as a class, or can I represent it as an array?
//Is it a top down, bottom down, or random order for BT
//Does the root count as a node? or Does it just mean the number of children from the root of the longest chain?

//create class of node and binary tree
    //node has value, left and right 
    //BT can be represented as an array
        //children are 2n +1 and 2n+2
    //set count = 1
   
        
    function maxDepth(arr){
        let depth = 1;
        let index = 0
        for (let i = index; i<arr.length; i++){
            if(arr[i*2+1]){
                depth++;
                index = i*2 +1 
            }
        }
        return depth
        }

        //This works, but is not what the code wanted it doesn't want it as an array but as a root


//the +1 is for the parent level

function maxDepth(root){
    if(root === null) return 0;
    // let left = maxDepth(root.left) + 1; //
    // let right = maxDepth(root.right) + 1; 
    return Math.min(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
    //prefer recursion in the return at the end why?
}

console.log(maxDepth([3,9,20,null,null,15,7]))















   


        
        
  