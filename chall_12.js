

//12 countletters that will print
//////////////////////////////////////////////////////////
/*MVP MVP*/

const sentence = "Hello I am a random sentence, we have learnt HTML, CSS, git and GitHub so far. Thanks"
//gonna be am object with all the letters in it
function countLetters(str){

  let lowStr = str.toLowerCase(); //so it all the same in the count
  let newStr = lowStr.replace(/[^a-zA-Z]+/g, ''); //to get only the letters
  
  let obj ={}

  for( let i = 0 ;i < newStr.length ;i++){
    //count occurances uwu
    let count = 0;
    for( let j = 0 ;j < newStr.length ;j++){
      if( newStr[i] === newStr[j] && i > j  ){
        break;
      }
      if( newStr[i] === newStr[j] ){
        count++;
      }
    }
    if(count > 0){
      obj[newStr[i]] = count;
    }
  }
  return obj; 

}

console.log(countLetters(sentence))
// =>
// {
//   h: 5, e: 7, l: 4, o: 3, i: 3,
//   a: 8, m: 3, r: 3, n: 6, d: 2,
//   s: 5, t: 6, c: 2, w: 1, v: 1,
//   g: 2, u: 1, b: 1, f: 1, k: 1
// }
