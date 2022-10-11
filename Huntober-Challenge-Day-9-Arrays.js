/* Description: I need twin functions, 
a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, 
and another that swaps it to the right.

Some things to note:

If the given value is on the edge of the array and can't move in that direction, don't move it.
The given primitive value will only occur once in the array
The array passed in should be mutated by this function. Scandalous, I know.  */


function swapLeft(arr, el){
    for(let i = 0; i<arr.length; i++){
      if(arr[0] === el) break
  
       else {[arr[arr.indexOf(el)-1],arr[i]] = [arr[i],arr[arr.indexOf(el)-1]]}
    }
  return arr
  }
  
  // test cases:
  console.log(swapLeft(['abc', 'xyz', 1, 2, 'Hey!'],'xyz')) // ['xyz', 'abc', 1, 2, 'Hey!']
  console.log(swapLeft(['xyz', 'abc', 1, 2, 'Hey!'], 'xyz')) // ['xyz', 'abc', 1, 2, 'Hey!']  no change
  
  
  function swapRight(arr,el){
    for(let i = 0; i<arr.length; i++){
      if(arr[arr.length-1] === el) break
  
      else {
        let elIndx = arr.indexOf(el),
            swapIndx = arr.indexOf(el)+1
  
        {[[arr[elIndx],arr[swapIndx]]=[arr[swapIndx],arr[elIndx]]]}
      }
    }
    return arr
  }
  
  // test cases:
   console.log(swapRight(['xyz', 'abc', 1, 2, 'Hey!'],2))  // ['xyz', 'abc', 1, 'Hey!', 2]
   console.log(swapRight(['xyz', 'abc', 1, 2, 'Hey!'],2))  // ['xyz', 'abc', 1, 'Hey!', 2] no change