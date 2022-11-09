function hacker(n,k,arr){
    //chapter 1 has arr[0] problems
    //chapter 2 has arr[1] problems
    //chapter 1 has 4 problems
    //chapter 2 has 2 problems
    //max 3 probs on a page

    //loop to count special pages and decrease n with each chapter
    let count = 0
    let page = 1
    let chapter = 0
    let map = new Map()
    for (let i=0; i<arr.length; i++){
        //each chapter
        let problem = 1
        let problemArray = []
        //page, probNums
        //add if statements
        while (arr[i] > 0){
            if (arr[i] > k){
                while (problemArray.length < k){
                    problemArray.push(problem)
                    problem ++
                }
                map.set(page, problemArray)
                page++
                // console.log(map)
                arr[i] -= k
                problemArray=[]
            }else{
                //how to push problemArray?
                while (arr[i] > 0){
                    problemArray.push(problem)
                    problem++
                    arr[i] --
                }
                map.set(page, problemArray)
                page++
                problemArray=[]
            }
        }
    }
    console.log(map)
    for (let i=1; i< page; i++){
        
        let countArr = map.get(i)
        if (countArr.includes(i)){
            count++
        }
        console.log('c',countArr)
    }
    return count
}

// console.log(hacker(5, 3, [4,2,6,1,10]))

function line(command){
    let count = 0
    let direction = 0
    for (let i=0; i<command.length; i++){
        if (command[i] == 'L'){
            direction -= 90
        }else if (command[i] == 'R'){
            direction += 90
        }else{
            direction += 180
        }
        if (direction % 180 == 0){
            count++
        }
    }
    console.log(direction)
    return count
}

// console.log(line('LLARL'))

function blank(k){
    let counter = 0
    let yellow = 0
    let red = 0
    while (counter <= k){
        if (counter % 2 == 0){
            red += counter * counter
        }else{
            yellow += counter*counter
        }
        counter++
    }
    let result = red - yellow

    return result
}

// console.log(blank(5))

function round(n){
    let result = false
    let start = 0
    let string = String(n)
    for (let i=0; i<string.length;i++){
        if (string[i] == '0'){
            start = 1
            result = false
        }else if (start == 1){
            result = true
            break
            
        }
    }
    return result
}

console.log(round(888))