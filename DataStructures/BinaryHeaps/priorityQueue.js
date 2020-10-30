//Data structure where each element has a priority associated with it. High priorities are served before elements with lower priorities.
    //Priority Queue is separate datastructure from a heap.
    //Lower number usually representes highest priority
    //Use heap so we don't have to use an array which requires us to loop over the entire array before getting what we want
//Think of the heap as the root is the highest priority and the children are lower priorities.
    //Insert with higher priority, add to end and bubble up
    //Remove highest priority swap with lowest and use bubbleDown


//PseudoCode (min binary heap priority queue change proper greater than to less than and change max to min.)
    //create class called PriorityQueue that looks exactly like a binary heap
    //create a class Node that contains a value and priority
        //priority is what orders the heap, the value is just something(string, integer etc. it is just a descriptor)
    //Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based of its priority
    //Dequeue method removes root element, returns it, and rearranges head using priority.
//Code does not guarantee if there is the same priority level (siblings) to be seen in any order.
    //add an insertTime to the node equal to Date.now() and insert this conditional where necessary (not implemented just a thought experiment for now)


    class PriorityQueue{
        constructor(){
            this.values = [];
        }
        enqueue(val,priority){
            let newNode = new Node(val,priority)
            this.values.push(newNode);
            this.bubbleUp();
        }
        bubbleUp(){
            let idx = this.values.length - 1;
            const element = this.values[idx];
            while(idx > 0){
                let parentIdx = Math.floor((idx - 1)/2);
                let parent = this.values[parentIdx];
                if(element.priority >= parent.priority) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
            }
        }
        dequeue(){
            let min = this.values[0];
            let end = this.values.pop();
            //only want to do the below if the length is greater than 0 else just remove the only one left.
            if(this.values.length > 0){
                this.values[0] = end;
                this.sinkDown();
            }
            return min
           
        }
        sinkDown(){
            let index = 0;
            let length = this.values.length;
            let element = this.values[0];
            while(true){
                let leftChildIdx = 2 * index +1
                let rightChildIdx = 2 * index +2
                //no guarantee that we will find a right and left child value and we would get an error We have to make sure they are not out of bounds
                let leftChild,rightChild;
                let swap = null;
                if(leftChildIdx < length){
                    leftChild = this.values[leftChildIdx]
                    if(leftChild.priority < element.priority){
                        swap = leftChildIdx
                    }
                }
                if(rightChildIdx < length){
                    rightChild = this.values[rightChildIdx]
                    if(
                        (swap === null && rightChild.priority < element.priority) || //leftChild was never set
                        (swap !==null && rightChild.priority < leftChild.priority)//rightChild is larger than thbe left
                    ){
                        swap = rightChildIdx;

                    }
                }
                if(swap === null) break;//This means its in the right place and never swapped
                //Swap is left or right index
                this.values[index] = this.values[swap]//make largest boy the new parent
                this.values[swap] = element //assign value of where large guy used to be to our min 
                index = swap //set index to new parent index and check children from there
            }
        }
    }

    class Node{
        constructor(val, priority){
            this.val = val;
            this.priority = priority
            this.insertTime = Date.now()
        }
    }

let ER = new PriorityQueue();
ER.enqueue("cold", 5)
ER.enqueue("stab wound", 1)
ER.enqueue("high fever", 3)
ER.enqueue("medium fever", 2)
ER.enqueue("beoken leg", 4)
console.log(ER)
