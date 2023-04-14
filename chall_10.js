
//10 sort function - no .sort()

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December']

const result = [ 'April', 'August', 'December', 'February', 'January', 'July',
  'June', 'March', 'May', 'November', 'October', 'September' ]

 const sort = str =>{
 //switch with the arrys if the first letter comes first in the apherbet //swap()
 
    for(let i = 0; i<=str.length; i++){
        for (let j = i+1; j<str.length; j++){
            if (str[j] < str[i]){
              var tmp = str[i];//rearranges the string
              str[i] = str[j]; //switching places until a is first
              str[j] = tmp;  
            }
        }
     
    }
    return str;
    }
    
console.log(sort(months))
