//tree structure similar to BST, but has diff rules
    //Max: immediate parent always larger than child 
    //Min: immediate parent always smaller than child 
    //No order between siblings
    //Binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first. As compact as possible.


//Binary Heaps are useful for priority queue data structures (MORE TO COME!)
//Also used a lot with graph traversal algorithms(more to come!)


//BIG O!!!!
    //Min and max heaps are great for insertion and deleted O(log N) for both
    //Search is O(n) because there is no specific order in this tree between siblings you must traverse all paths.