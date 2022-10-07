


const letterNumberCypher = (str) => {
   str = str.split('')
   
   for(let i = 0; i<str.length; i++){
       // Number -> Letter
     if(str[i] === '0' && str[i-1] != '#') str[i] = 'O'
     if(str[i] === '1' && str[i-1] != '#') str[i] = 'I'
     if(str[i] === '2' && str[i-1] != '#') str[i] = 'Z'
     if(str[i] === '3' && str[i-1] != '#') str[i] = 'E'
     if(str[i] === '4' && str[i-1] != '#') str[i] = 'h'
     if(str[i] === '5' && str[i-1] != '#') str[i] = 'S'
     if(str[i] === '6' && str[i-1] != '#') str[i] = 'G'
     if(str[i] === '7' && str[i-1] != '#') str[i] = 'L'
     if(str[i] === '8' && str[i-1] != '#') str[i] = 'B'
     if(str[i] === '9' && str[i-1] != '#') str[i] = 'q'
   }
   
   let newStr = str.join('').split(' '),
       scndArr = str.join('').split(' ')
 
   for(let i =0; i<newStr.length; i++){
     if(newStr[i].includes('#')){
 
         var preChange = newStr[i]
       
         // console.log(`${newStr[i]} includes '#'`)
         newStr[i] = newStr[i].split('')
       for(let j = 0; j<newStr[i].length;j++){
               // Letter -> Number
     if(newStr[i][j] === 'O') newStr[i][j] = '0'
     if(newStr[i][j] === 'I') newStr[i][j] = '1'
     if(newStr[i][j] === 'Z') newStr[i][j] = '2'
     if(newStr[i][j] === 'E') newStr[i][j] = '3'
     if(newStr[i][j] === 'h') newStr[i][j] = '4'
     if(newStr[i][j] === 'S') newStr[i][j] = '5'
     if(newStr[i][j] === 'G') newStr[i][j] = '6'
     if(newStr[i][j] === 'L') newStr[i][j] = '7'
     if(newStr[i][j] === 'B') newStr[i][j] = '8'
     if(newStr[i][j] === 'q') newStr[i][j] = '9'
       }
     var num = newStr[i].filter((el)=> el != ',').join('')
   }
   }
   
   newStr[scndArr.indexOf(preChange)] = num
   return newStr.join(' ')
 }
 
 console.log(letterNumberCypher("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))  // "PRO-TIP #498: IT'S NICE TO SAY HELLO."
 console.log(letterNumberCypher("7053 1T'5 #GS"))  // "LOSE IT'S #65"