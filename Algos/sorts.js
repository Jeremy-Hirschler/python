
function bubbleSort(arr){
    //loop thru array once to swap values, how to keep going?
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i] > arr[j]){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

// console.log(bubbleSort([3,2,5,4,3]))

class Node {
    constructor(val){
        this.data =  val
        this.next = null
    }
}

class SLL {
    constructor(){
        this.head = null
    }

    addFront(value){
        let newNode = new Node(value)

        if (!this.head){
            this.head = newNode
            return this
        }
        //if head does exist, want to create pointer from new node to head
        newNode.next = this.head
        this.head = newNode
        return this
    }


}

let s =  new SLL()
console.log(s.addFront(8).addFront(12).addFront(10))
console.log(s.sort())