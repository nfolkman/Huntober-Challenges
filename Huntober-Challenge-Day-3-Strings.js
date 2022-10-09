/* Yesterday you should have come up with a few specific characters that we'll need today. Let's refer to those as our key characters.

We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' ').  */


function replaceKeyChars(str){
    str = str.split('')
    for(let i = 0; i<str.length; i++){
      if(str[i] === 'S' || str[i] === 'p' || str[i] === 'a' || str[i] === 'c' || str[i] === 'e') str[i] = ' '
    }
    
    return str.join('')
  }
  
  console.log(replaceKeyChars('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'))