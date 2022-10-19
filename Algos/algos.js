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
        //comment
    return answer
}

console.log('ans',sticks([1,2,3]))//3,2,1