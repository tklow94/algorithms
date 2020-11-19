//Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

//For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

//given this.left, this.right, this.val, TreeNode as the class

//Not quite sure what this means, I am going to assume it means that sibling nodes cannot differ by more than one node. But when it comes to the level, we fill out the left then the right first.

//input [-10,-3,0,5,9]
//output [0, -3,9,-10,null,5]



//Pseudo: 
    //find mid point to put as the head.
    //try recursion
    //declare new class TreeNode that takes in the mid
    //recursively set node.left and node.right to be .slice(0,mid) and .slice(mid,end)
    

    function sortedArrayToBST(arr){
        if(arr === null || arr.length === 0) return null;
        let mid = Math.floor(arr.length/2);
        let node = new TreeNode(arr[mid]);
        node.left = sortedArrayToBST(arr.slice(0,mid)) 
        node.right = sortedArrayToBST(arr.slice(mid + 1, arr.length))
        return node 
    }
    
    
    console.log(sortedArrayToBST([-10,-3,0,5,9]))


    //Time is O(n), Space is O(n)