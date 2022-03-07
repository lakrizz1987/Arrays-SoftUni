function solve(array) {
    let firstNum = Number(array.shift())
    let secondNum = Number(array.pop())
    let sum = firstNum + secondNum
    console.log(sum)
}
solve(['20', '30', '40'])