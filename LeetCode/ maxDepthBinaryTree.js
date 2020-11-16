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

//tail recursion optimizes in languages that do so with recursion. Meaning it is better to put the recursive return at the end.
//In standard recursion, the entire stack must be completed before a result is given, In tail recursion, you perform the calculation first then the recursive call passing the results from one call to another. The advantage is not needing the stack to execute the final result. It is akin to having separate independant maxDepths being called independently from one another than relying on a stack to finish to execute.

//Regular stack
recsum(5)
5 + recsum(4)
5 + (4 + recsum(3))
5 + (4 + (3 + recsum(2)))
5 + (4 + (3 + (2 + recsum(1))))
5 + (4 + (3 + (2 + 1)))
15

//Tail end recursion
tailrecsum(5, 0)
tailrecsum(4, 5)
tailrecsum(3, 9)
tailrecsum(2, 12)
tailrecsum(1, 14)
tailrecsum(0, 15)
15













   


        
        
  