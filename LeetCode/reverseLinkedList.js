//Reverse a singly linked list.
// Input: 1->2->3->4->5->NULL 
// Output: 5->4->3->2->1->NULL


//Singly linked list can only be traversed forwards. Can only access next and not prev.
    //Will need a loop, prolly a while loop
    //Swap the head and tail, but have the head stored in a separate.
    //We need to build this end to head
        // 2=>1, gonna need two variables at least
        //assign variables next and prev. Move those variables up throughout until we reach the end of the list


       function reverseList(head){
            let pre = null
            while(head){
                const next = head.next
                head.next = pre
                pre = head
                head = next
            }
            return pre
        };


        //Time is O(n) goes throuhg the whole list
        //Space is O(1)