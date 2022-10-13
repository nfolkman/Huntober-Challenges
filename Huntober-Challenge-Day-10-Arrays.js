/* Description: Today I'd like you to write a function that:

- takes in a given array of strings and move any entries containing the letter 'a' to the front
- then move any remaining entries that have over 3 characters to the back
- please preserve the relative order of entries within their given category  */


function shiftyShifty(arr) {
    let aArr = [],
        scndArr = [],
        lastArr = []
      for(let str of arr){
        if(str.includes('a')){
          aArr.push(str)
        }
      
        if(str.length>3 && !str.includes('a')){ 
          lastArr.push(str)
        }
        else scndArr.push(str)
      }
      
      aArr = aArr.concat(scndArr,lastArr)
    
    for(let i = 0; i<aArr.length; i++){
        if(aArr.indexOf(aArr[i]) !== aArr.lastIndexOf(aArr[i])) aArr.splice(aArr.lastIndexOf(aArr[i]),1)
      }
    return aArr
    }
    
    // test cases:
    console.log(shiftyShifty(['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']))  // ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']