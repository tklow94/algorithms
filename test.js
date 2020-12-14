//Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

//[1,2,3], [1,3,4] => [1,1,2,3,3,4]


//singly linked list; Since the lists are sorted, we can use a double nested for loop, but that would probably be a non optimal time complexity. 
    //Since we are returning a new list, lets create a new list variable. Maybe a merge sort for the two arrays, but that wouldn't inherently create a linked list, we would have to add some extra spice, and probably just do the merge part of the mergeSort.
    //First we have to merge the two lists.


function mergeTwoLists(l1,l2){
    let result = new ListNode(0); //initiate a dummy
    let current = result;
    let p1 = l1;
    let p2 = l2;
    while(p1 && p2){
        if(p1.val < p2.val){
            current.next = p1;
            p1 = p1.next;
        }else{
           current.next = p2;
           p2 = p2.next;
        }
        current = current.next
    }
    current.next = p1 || p2; //if either runs out of elements append the list that didn't run out to the new list.
    return result.next;
}

console.log(mergeTwoLists([1,2,3],[1,3,4]))


//Time O(n)
//Space O(1)

