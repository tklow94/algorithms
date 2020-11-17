//Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

//It is guaranteed that the node to be deleted is not a tail node in the list.


// 1 => 2 =>3 =>4

//Lets say 2 is the one to be deleted. We have to get the next node value and assign it as the one to be deleted and then assign the next node to be the next next node.

function deleteNodeLinkedList(node){
     node.val = node.next.val;
     node.next = node.next.next;
}

//delete from linked list in this case is O(1) just like a insert/removal from the ends. Space complexity is also O(1)