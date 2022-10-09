


/* Description: There are some very strict rules that the pun submissions had to follow. I need to know which of these cat puns made the cut. 
I promise tomorrow we'll get back to decoding our secret message, and coincidentally, 
I'm pretty sure the number of these puns that met the criteria will match a key sequence value we'll need tomorrow. Isn't that lucky?

Here are the rules these submissions had to follow:
- No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
- Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
- Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
- The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
- Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
- Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
- Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
- Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)  */


function catPunSubmissions(str){
    // no empty spaces at start or end of submissions
    // cannot contain 'dog, 'bark', or 'bone' in any combo of upper or lowercase
    // total length of pun cannot be multiple of 5
    // 
    
    
    // filter out puns with end or beginning spaces
    str = str.split(',').filter((pun) => pun === pun.trim())
    // sum of first and last char's charCodes must be odd
    str = str.filter((char)=> (char.charCodeAt(0) + char.charCodeAt(char.length-1)) % 2 !== 0)
    
      for(let  i = 0; i<str.length; i++){
      
        str = str.filter((pun)=> !pun.includes('dog') && !pun.includes('Dog') && !pun.includes('bark') &&       !pun.includes('Bark') && !pun.includes('bone') && !pun.includes('Bone'))
        // length not mult of 5
        str = str.filter((pun)=> pun.length % 5 !== 0)
        // char after middle of str can't be 'e'
        str = str.filter((pun)=> pun[pun.length/2] !== 'e')
    
        // even # of lowerCase letters
        str = str.filter((pun)=> (pun.length - pun.replace(/[a-z]/g, '').length) % 2 === 0)
        
        // must have at least 2 capital letters BUT no capital 'S'
        str = str.filter((pun)=> (pun.length - pun.replace(/[A-Z]/g, '').length) >=2).filter((pun)=> !pun.includes('S'))
      }
    
      return str
    }
    
    // test case:
    console.log(catPunSubmissions("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
    ))
    
    
    // Solution: ["Mew Peter","Teenage Mewtant Ninja Turtles","Rick & Meowty","Mewster Rogers' Neighborhood"]