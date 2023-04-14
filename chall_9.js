
//9 use .reduce()
/////////////////////////////////////////

function max(num){
   let bigNum;
    num.reduce((bigNum, num)=>{ 
        if (num > bigNum){
            bigNum = num;
        } return console.log(bigNum);});  
}
max([1, 297, -73, 99, 10]) 


////////////////////////////////

function shortestString(word) {
    let shortword ='';
    word.reduce((shortword,word)=>{
        if(word.length <shortword.length){
            shortword = word;
        }return console.log(shortword)
    });
}

shortestString(['prefer','I','marshmallow', 'to', 'oreo']) 
