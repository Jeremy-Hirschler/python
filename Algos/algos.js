function sticks(arr){
    let answer=[arr.length]
    while (arr.length > 0){
        //re-initialize count, newArr, and min each time loop runs
            let count=0
            let newArr=[]
            let min=arr[0]
            for (let i=0; i<arr.length;i++){
                if(arr[i] < min){
                    min = arr[i]
                }
            }
            console.log('min',min)
            //subtract min from elements in array
            for (let i=0; i<arr.length; i++){
                arr[i] = arr[i]-min
                if(arr[i]!== 0){
                    count++
                    newArr.push(arr[i])
                }
                console.log('a',arr[i])
            }
            //discard 0s from the array
            console.log(newArr)
            //single loop completed. how to break the cycle? when 
            if(count !==0){
                answer.push(count)
            }
            //set arr to the newly created array
            arr=newArr
            console.log('count',count)
            console.log('arr end',arr)
        }
        //unccoment
    return answer
}

// console.log('ans',sticks([1,2,3]))//3,2,1
//
function nest(n){
    // const map = new Map()
    // let count = 0
    
    // for (let i=0; i<n; i++){
    //     if (!map.get(i)){
    //         map.set(i)
    //     }
    // }
    // console.log(map)
    return count
}

// console.log(nest(9))

function squares(n){
    let count = 1
    let sum = 0
    let list = [n]

    while (2 < 3){

        //split n into its individual digits
        let split_digits = String(n).split('')
        console.log('split',split_digits)
        //loop thru digit array  and square each value 
        for (let i=0; i<split_digits.length; i++){
            sum += split_digits[i]**2
        }
        //add sum to the list array outside of this loop
        count++
        console.log('count',count)
        
        console.log(list)
        //if this sum is equal to any value in the array, return count
        for (let j=0; j<list.length; j++){
            if (list[j] == sum){
                return count
            }
        }
        //re-initialize variables for next time thru while loop
        list.push(sum)
        n = sum
        sum = 0
        
    }
}

// console.log(squares(16))

function substring(s){
    let substring = ''
    let arr = []
    let map = new Map()
    for (let i=0; i<s.length; i++){
        if (s[i] !== s[i-1] && !map.get(s[i])){
            substring += s[i]
            map.set(s[i], 1)
            console.log('map',map)
            arr.push(substring)
        }else if (map.get(s[i])){
            // arr.push(substring)
            substring = s[i-1]
            map.delete(s[i])
            i--
            console.log('second',substring)
        }else{
            console.log('third')
            substring = s[i]
        }
    }

    if (arr.length > 0){

        let max = arr[0]
        
        for (let i=0; i<arr.length; i++){
            if (arr[i].length > max.length){
                max = arr[i]
            }
            console.log('subs',substring, arr)
            console.log(max)
        }
        return max.length
    }
    console.log(substring, arr)
    return 0
}

// console.log(substring('pwwkew'))



function sub(str){
    //create new substring
    //check if letter already exists within substring
    //add to the substring for each letter
    //if it does, hold onto substring

    
    
    let substring = ''
    let arr = []
    let map = new Map()
    for (let i=0; i<str.length; i++){
        if (!map.has(str[i])){
            
            map.set(str[i], i)
            substring += str[i]
            arr.push(substring)
            console.log('y')
            console.log('array', arr)
        }else{
            substring = ''

            i = map.get(str[i])
            console.log('i',i)
            map.clear()
            console.log('n')
            
        }
        
    }
    if (arr.length > 0){

        var max = arr[0].length
    
        for (let i=0; i<arr.length; i++){
            if (arr[i].length > max){
                max = arr[i].length
            }
        }
    }

    console.log(map)
    return max
}
// console.log('FINAL_______',sub('abcabcbb'))
// console.log('FINAL_______',sub('pwwkew'))
// console.log('FINAL_______',sub('dvdf'))

// class Node {
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class SLL {
//     constructor(){
//         this.head = null
//     }
//     addFront(val){
//         let newNode = new Node(val)

//         if (!this.head){
//             this.head = newNode
//             return this
//         }

//         newNode.next = this.head
//         this.head = newNode
//         return this
//     }
// }

// let x = new SLL()
// console.log(x.addFront(8).addFront(10).addFront(2))

// class Node {
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class SLL {
//     constructor(){
//         this.head = null
//     }

//     addFront(val){
//         let newNode = new Node(val)
//         if (!this.head){
//             this.head = newNode
//             return this
//         }

//         newNode.next = this.head
//         this.head = newNode
//         return this
//     }

//     size(){
//         let runner = this.head
//         let count = 0
//         while (runner !== null){
//             count ++
//             runner = runner.next
//         }
//         return count
//     }
// }

// let p = new SLL()

// console.log(p.addFront(3).addFront(4).addFront(18))
// console.log(p.size())

// class Node{
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class SLL{
//     constructor(){
//         this.head = null
//     }

//     addFront(val){
//         let newNode = new Node(val)
//         if (!this.head){
//             this.head = newNode
//             return this
//         }
//         newNode.next = this.head
//         this.head = newNode
//         return this
//     }

//     size(){
//         let runner = this.head
//         let count = 0
//         while (runner !== null){
//             count++
//             runner = runner.next
//         }
//         return count
//     }
// }

// let z = new SLL()

// console.log(z.addFront(3).addFront(4).addFront(191))
// console.log(z.size())

class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

class SLL{
    constructor(){
        this.head = null
    }

    addFront(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            return this
        }

        newNode.next = this.head
        this.head = newNode
        return this
    }

    size(){
        let count = 0
        let runner = this.head
        while (runner !== null){
            count++
            runner = runner.next
        }
        return count
    }
}

let z = new SLL()
console.log(z.addFront(3).addFront(45).addFront(14))
console.log(z.size())