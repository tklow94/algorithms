//Binary tree is a type of tree structure
    //Each node can have at most two children 0-2 children
//Binary Search tree is a special type of Binary tree. It is kept in a certain order and excells at searching.
    //Usually for data that can be stored and ordered (numbers are the most common)
    //Commonly structured as such: all numbers less than parent are stored on the left, and all greater are stored on the right.

//BST makes it easy and fast to look things up and insert. Searching is very quick compared to in an unsorted tree.
    //Comparisons keep getting cut in half in general.
        //Less than or greater than, depending on the answer move down one branch of a tree and ignore the rest.


//Big O of insertion and searching are both O(logn)
    //2^n = number of nodes, where n is the number of steps 
    //Best and avg is the same
    //Worst Case is not gauranteed especially if it is just a singly linked list, then it becomes O(n)
