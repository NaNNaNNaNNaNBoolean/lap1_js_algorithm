
//4 upcase using Array.prototype.forEach()

const upcase = function(upLetter) {
    let newup =[];
    upLetter.forEach(upLetter => { 
    newup.push(upLetter.toUpperCase())});
    return console.log(newup);
}

//no .forEach()

function upcase(arr){

    let newup = [];
    for(let i = 0; i<arr.length;i++){
        arr.forEach(function(upLetter,i) {newup += upLetter[i].toUpperCase()});
    }
    return console.log(newup);
}

upcase(["a", "b", "c", "d"])
