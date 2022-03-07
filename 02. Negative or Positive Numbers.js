function solve(array) {
    let arr = array.map(Number)
    let newArr = []
    for (const i of arr) {
        if(i < 0){
            newArr.unshift(i)
        }else{
            newArr.push(i)
        }
    }
        
   for (const iterator of newArr) {
       console.log(iterator)
       
   }
}
solve(['3', '-2', '0', '-1'])