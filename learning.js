
//challenge 1

/*const num = 6;

if (num >= 11){
    console.log("high")
}else if(num < 3){
    console.log("low")
}else if( 3< num < 11){
    console.log("medium")
}else if( num === 7){
    console.log("excat")
}*/

//challenge 2
/*const totalNum = 30;

for (let i = 0; i <= totalNum; i++){
    if(i <10){
        console.log(".")
    }
    else if(i > 20){
        console.log("X")
    }
    else if(10 < i < 20){
        console.log("x")
    }
}*/


//challenge 3

/*function farwell(name){
    return console.log("Goodbye forever, " + name)
}
farwell("Nicole's hopes & dreams")*/


//challenge 4

/*function countDown(start,stop,final){
    if (start >stop){
        for (start; start >= 0; start--){
            if(start === stop){
                console.log(final);
            }
            else{console.log(start)}
        }
    }else {console.log("Thats not how countdowns work?!")}

}

countDown(10,0,"BlastOff");*/


//challange 5

/*function countTarget(arr,target){
    
    let countNum = 0;
    let gucci;
    
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === target){
            countNum++;
        }
    } 
    if (countNum > 0){
        gucci = true;
    }else {gucci = false;}

     return console.log ({success: gucci, count: countNum});
}

countTarget([1, 1, 1], 1)
countTarget([1, 1, 1], 3)
countTarget([1, 1, "1"], 1)*/
