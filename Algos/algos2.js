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

console.log(hacker(5, 3, [4,2,6,1,10]))