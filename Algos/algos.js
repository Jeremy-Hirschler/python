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
//         if(!this.head){
//             this.head = newNode
//             return this
//         }

//         newNode.next = this.head
//         this.head = newNode
//         return this
//     }

//     size(){
//         let count = 0
//         let runner = this.head
//         while (runner !== null){
//             count++
//             runner = runner.next
//         }
//         return count
//     }
// }

// let z = new SLL()
// console.log(z.addFront(3).addFront(45).addFront(14))
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
        if (!this.head){
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

// let s = new SLL()
// console.log(s.addFront(3).addFront(9))
// console.log(s.size())

// function solution(l, r) {
//     let count = 0
    
//     var map = new Map()
//     //find sum of current index
//     for (let i=l; i<=r; i++){
//         var sum = 0
//         var arr = String(i).split('')
        
//         for (let j=0; j<arr.length; j++){
//             sum += Number(arr[j])
//         }
//         //have sum here, find which numbers are comfortable with index i
//         let comfy = []
//         for (let k=i-sum; k<=i+sum; k++){
//             comfy.push(k)
//         }
//         map.set(i, comfy)
//         //evaluate i and arrays
        
//         // console.log(comfy)
//     }
    


//     console.log(map)
//     return count
// }

// console.log(solution(10, 12))

function loop(n){
    let k=1
    let product = 1
    while (product < n){
        product *= k
        k++
    }
    return product
}



// console.log(loop(17))

function countSum(n,l,r){
    //use hashmap to get sum needed
    let map = new Map()
    let count = 0
    for (let index=l; index<=r; index++){
        //check the value at the index if it adds to current index
        if (!map.has(index)){
            map.set(index, n-index)
        }
        if (map.has(map.get(index))){
            count ++
        }

    }
    
    return count
}

// console.log(countSum(6,2,4))
//comments, more comments to push
// function stringH(a,b){
//     let map = new Map()
//     for (let i=0; i<b.length; i++){
//         if (!map.get(b[i])){
//             map.set(b[i], 1)
//         }else{
//             map.set(b[i], map.get(b[i]) + 1)
//         }
//     }
//     console.log(map)
//     for (let i=0; i<b.length; i++){
//         if (map.get(b[i]))
//     }

//     return 1
// }

// console.log(stringH('abc','abccba'))






function marble(a,b,n){
    let money = 0
    while (n > 0){
        money += a*b
        a++
        b++
        n --
    }
    return money
}

// console.log(marble(1,2,2))

function noun(str){
    let lower = str.toLowerCase()
    let upper = str[0].toUpperCase()
    
    let cap = upper + lower.slice(1)
    return cap
}

// console.log(noun('pARis'))

function noCp(a,b){
    let count = 0
    let mapB = new Map()
    for (let i=0; i<b.length;i++){
        mapB.get(b[i]) ?
        mapB.set(b[i], mapB.get(b[i]) + 1): mapB.set(b[i], 1)
    }
    let mapA = new Map()
    for (let i=0; i<a.length;i++){
        mapA.get(a[i]) ?
        mapA.set(a[i], mapA.get(a[i]) + 1): mapA.set(a[i], 1)
    }
    while (mapB.size > 0){
        for (let i=0; i<a.length;i++){
            if (mapB.get(a[i])){
                mapB.set(a[i], mapB.get(a[i]) - 1)
            }
            if (mapB.get(a[i]) == 0){
                mapB.clear()
            }
        }
        count++
    }
    return count
}

// console.log(noCp('ab','abcbcb'))

//comment



