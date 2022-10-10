/* Description: Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. 
Counting should begin from the first element in the string and should continue in that pattern until the end of the string.  */


function everyNthChar(str, num){
    str = str.split('')
    for(let i = 0; i<str.length; i++){
      if(i%(num-1) === 0 && i !== 0) str.splice(i,1)
    }
    return str.join('')
  }
  
  // test cases:
  console.log(everyNthChar("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4))
  console.log(everyNthChar("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))