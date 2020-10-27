//removing from a Maxbinary heap we remove the root, and in a in we remove the lowest child
    //Use technique valled down-heap or bubble-down
        //place the lowest value as the new root that is the most wrong and fix from there
            //compare the new root to its children and swap with the larger child.


//Pseudo
    //swap the first value with the last one
    //Pop from the values property so you can return value at the end
    //Have the new root sink down to the correct spot
        //parentIndex starts at 0 (root)
        //Find the index of the left child and the right child
        //if the left or right child is greater than the element swap. If both left and right children are larger swap with the largest child
        //The child index you swapped to now becomes the new parent Index
        //Keep looping and swapping until neither child is larger than the element.
    //return the old root


    class MaxBinaryHeap {
        constructor(){
            this.values = [];
        }
        insert(element){
            this.values.push(element);
            this.bubbleUp();
        }
        bubbleUp(){
            let idx = this.values.length - 1;
            const element = this.values[idx];
            while(idx > 0){
                let parentIdx = Math.floor((idx - 1)/2);
                let parent = this.values[parentIdx];
                if(element <= parent) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
            }
        }
        extractMax(){
            let max = this.values[0];
            let end = this.values.pop();
            //only want to do the below if the length is greater than 0 else just remove the only one left.
            if(this.values.length > 0){
                this.values[0] = end;
                this.sinkDown();
            }
            return max
           
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
                    if(leftChild > element){
                        swap = leftChildIdx
                    }
                }
                if(rightChildIdx < length){
                    rightChild = this.values[rightChildIdx]
                    if(
                        (swap === null && rightChild > element) || //leftChild was never set
                        (swap !==null && rightChild > leftChild)//rightChild is larger than thbe left
                    ){
                        swap = rightChildIdx;

                    }
                }
                if(swap === null) break;//This means its in the right place and never swapped
                //Swap is left or right index
                this.values[index] = this.values[swap]
                this.values[swap] = element 
                index = swap 
            }
        }
    }
    
    let heap = new MaxBinaryHeap();
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    console.log(heap.values)
    console.log(heap.extractMax());
    console.log(heap.extractMax());
    console.log(heap.extractMax());
    console.log(heap.extractMax());
    console.log(heap.extractMax());
    console.log(heap.extractMax());
    console.log(heap.extractMax());
    console.log(heap.values)