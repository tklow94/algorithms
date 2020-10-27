//add to the end (always gets inserted to the left of the tree because we are pushing to the end at first). Just remeber it stays as compact as possible so it will add to left then right then the next parent etc. until get the most compact tree as possible.
//bubble up (swap until it finds its correct resting place)
    //compare node inserted to it's parent and swap if it is larger
    //compare to parent until it doesn't swap


//PseudoCode
    //push value into values prop on the heap
    //Create a method called bubble up
        //create a variable called index which is the length of the values property-1
        //create a variable called parentIndex which is the floor of index-1 /2
        //keep looping as long as the values element at the parentIndex is less than the values element at the child index
            //swap the value of the values element at the parentIndex with the value of the element property at the child index.
            //set index to be the parentIndex and start over.
            //Need to create a condition to prevent index 0 -1 / 2 Math.floor to -1

            class MaxBinaryHeap{
                constructor(){
                    this.values = [41,39,33,18,27,12]
                }
                insert(val){
                    this.values.push(val)
                    this.bubbleUp();
                }
                bubbleUp(){
                    let index = this.values.length -1;
                    const element = this.values[index]
                    while(index > 0){//prevents -1 problem
                        let parentIndex = Math.floor((index-1)/2);
                        let parent= this.values[parentIndex]
                        if(element <= parent)break;
                            this.values[parentIndex] = element;
                            this.values[index] = parent;
                            index = parentIndex;
                    }
                    
                }
            }
            
            let heap = new MaxBinaryHeap()
            heap.insert(55)
            console.log(heap)