function solve(input){
let arr = input
let k = arr.shift()
let arrFront = arr.slice(0,k)
let arrBack = arr.slice(arr.length-k)
console.log(arrFront.join(" "))
console.log(arrBack.join(" "))
}
solve([2, 
    7, 8, 9]
    )