function solve(input) {

    function add(array,num){
        return array.push(num)
    }  
    
    function remove(num){
        arr = arr.filter(x=>x !== num)
        
    }

    function removeAtIndex(array,num){
        return array.splice(num,1)
    }

    function insert(array,num1,num2){
        return array.splice(num2,0,num1)
    }


    let arr = input.shift().split(" ").map(Number)

    for (let i = 0; i < input.length; i++) {

        let newArr = input[i].split(" ")
        let command = newArr.shift()
        let num1 
        let num2

        if (command === "Insert") {
            num1 = Number(newArr[0])
            num2 = Number(newArr[1])
        } else {
            num1 = Number(newArr.shift())
        }

        switch (command) {
            case "Add":
            add(arr,num1)
                break;
            case "Remove":
            remove(num1)
                break;
            case "RemoveAt":
            removeAtIndex(arr,num1)
                break;
            case "Insert":
            insert(arr,num1,num2)
                break;

            default:
                break;
        }

    }
    console.log(arr.join(" "))
}

solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']

)