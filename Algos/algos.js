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

