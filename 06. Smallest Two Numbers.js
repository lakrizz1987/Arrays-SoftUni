function solve(arr) {
    let newArr = arr.sort((a, b) => {
        return a - b
    })
    console.log(newArr.splice(0,2).join(" "))
}
solve([3, 0, 10, 4, 7, 3])