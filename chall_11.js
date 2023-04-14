//11 .sort()
//////////////////////////////////////////////

const trainers = ["Ree", "romeo", "emile", "sergi"]
const sortedNames = str =>{
    //not easy because of uppercase //cry//
    str.sort(function(oldStr,newStr){
      // .localeCompare()
      return oldStr.toLowerCase().localeCompare(newStr.toLowerCase());
    });
    console.log(str);
}
sortedNames(trainers) 
