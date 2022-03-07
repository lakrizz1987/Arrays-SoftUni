function solve(arr){
    let newArr = arr.filter((num,i)=> i % 2 !== 0)
    let arr2 = newArr.map(x=>x*2)
    console.log(arr2.reverse().join(" "))
}
solve([3, 0, 10, 4, 7, 3])