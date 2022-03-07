function solve(n, k) {
    let arr = []
    let element = 1
    arr.push(element)
    let i = 0
    while (arr.length < n) {
        //let sum = 0

        let newArr = arr.slice(i, 2)
        let sum = 0
        for (let i of newArr) {
            sum += i
        }
        arr.push(sum)
        i++


    }




}
solve(6, 3)