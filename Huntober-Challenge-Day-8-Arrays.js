/* Description: Today's task is to write a function that will check equality between 2 arrays with a particular structure.

The arrays will:

- Be of equal size
- Will each contain some number (X) arrays
- Each inner array will contain that same number (X) primitive elements

All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.  */


function compareMatrices(arr1,arr2){
    let result = false
    
      for(let i =0; i<arr1.length; i++){
        for(let j = 0; j<arr1[i].length;j++){
          if(arr1[i].join() === arr2[i].join()) result = true
          else result = false
        }
      }
     return result
    }
    
    // test cases:
    console.log(compareMatrices([['a','b','c'],['d','e','f'],['g','h','i']],[['a','b','c'],['d','e','f'],['g','h','i']]))  // true
    console.log(compareMatrices([['a','b','c'],['d','e','f'],['g','h','i']],[['a','B','c'],['d','E','f'],['g','H','i']]))  // false
    console.log(compareMatrices([['a','b','c'],['d','e','f'],['g','h','i']],[['a','b','c'],['g','h','i'],['d','e','f']]))  // false