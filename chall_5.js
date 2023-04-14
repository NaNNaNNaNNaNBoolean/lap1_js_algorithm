
//5 downcase using .map()

function downcase(arr){
    newarr =arr.map( arr => arr.toLowerCase())
    return console.log(newarr)
}
downcase(["A", "B", "C", "D"]) === ["a", "b", "c", "d"]

