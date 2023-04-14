
//3 reverse functions

//3a using for

function reverse1(word){
    //.reverse()
    let newback = "";
    //go backwards through the word
    for(let i = word.length-1; i>=0; i-- ){
        //as it goes back, goes into new string
        newback += word[i];
         //adding the letters into the newback string ""
    }
   return console.log(newback);
}

reverse1("olleh") === "hello"
reverse1("tpircSavaJ") === "JavaScript"

// 3b for in loop

function reverse2(word){
    let newback = "";
    //go forward through the word - 0,1,2,3
    for(let i in word){
        //
        newback = word[i] + newback;
        //adding t
    }
   return console.log(newback);
}
reverse2("olleh") 
reverse2("tpircSavaJ") 
