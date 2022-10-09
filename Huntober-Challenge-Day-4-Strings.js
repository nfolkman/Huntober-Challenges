/* Description: So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. 
Today is simple! Given a string, reverse it. 
Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string.  */


function flipStr(str){
    str = str.split('').reverse().join('')
  
    return str
  }
  

  // test case:
  console.log(flipStr("   The white space at the beginning of this string doesn't match the whitespace at the end. "))  
  // " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "