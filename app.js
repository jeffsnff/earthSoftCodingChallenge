

function howManyLetters(){

  // Removes the old result from page
  const oldResult = document.getElementById("result");
  while (oldResult.hasChildNodes()) {
    oldResult.removeChild(oldResult.firstChild);
  }

  // Grabs user input from page and forces it to lower case
  let userInput = document.getElementById('userInput').value.toLowerCase()

  // letters we will be testing against
  const alphabet = 'abcdefghijklmnopqurstuvwxyz'

  //creats the object 
  let letterCount = {}

  // iterates user input over the alapabet string
  // then adds the letter in user input into the object
  for (let i = 0; i<userInput.length; i++){
    if (alphabet.includes(userInput[i])){
      if ( letterCount[userInput[i]]){
        letterCount[userInput[i]]++
      }else{
        letterCount[userInput[i]] = 1
      }
    }
  }

  // creates a list item then appends to result ul
  for(const [key, value ] of Object.entries(letterCount).sort()){
    listItem = document.createElement('div')
    listItem.innerHTML =  key + ' : ' + ' ' + value
    document.getElementById('result').appendChild(listItem)
  }  
}

