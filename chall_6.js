
//6 evens .filter()
////////////////////////////////////////////////////////////////////////

const evens = (arr) => arr.filter(function(num){ 
    let evenNum = [];
     if(num%2 === 0){
         evenNum+= num;
    }else {false}
     return console.log(evenNum)
});

evens([1, 2, 3, 45, 79, 8]) === [2, 8]
