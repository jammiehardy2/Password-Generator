//scriptjs
//Assignment
var generateBtn = document.querySelector("#generate");
var includeNumbers = ["1","2","3","4","5","6","7","8","9","0"];
var includeUpperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var includeLowerCaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var includeSpecialCharacters=["!","@","#","%","^","&","*","(",")","~","?","/"];
var userChoice=[];
var finalPassword=[];
//My arrays


// Write password to the #password input
function myFunctionPassword(){
  
  
  
  //var passwordCreated=[];
  //function mygeneratePassword(){
   // var passwordText = document.querySelector("#mygeneratePassword");  

//var userChoicePasswordLength =prompt (passwordLength < -128 && passwordLength >-8)
//If (passwordLength <128 && passwordLength >8)

 
//Choosing the password inputs
var passwordLength =prompt("Enter a password length between 8 and 128")
    //if (passwordLength) 
   // userChoice = userChoice(passwordLength < 128 && passwordLength >8);  
//}
var userChoiceNumber =confirm("do you want numbers")
    if (userChoiceNumber){ 
    userChoice = userChoice.concat(includeNumbers);
    finalPassword.concat(randomCharacter(includeNumbers));
  }

//console.log (includeNumbers)
var userChoiceUppercase =confirm("do you want Uppercase Characters") 
    if (userChoiceUppercase) {
    userChoice = userChoice.concat(includeUpperCaseCharacters);
    finalPassword.concat(randomCharacter(includeUpperCaseCharacters));
//console.log (includeUpperCaseCharacters)
    }
var userChoiceLowercase =confirm("do you want Lowercase Characters")
    if (userChoiceLowercase){
    userChoice = userChoice.concat(includeLowerCaseCharacters);
    finalPassword.concat(randomCharacter(includeLowerCaseCharacters));
    }  
//console.log (includeLowerCaseCharacters)
  
  var userChoiceSpecialCharacters =confirm("do you want Special Characters")
    if (userChoiceSpecialCharacters){
    userChoice = userChoice.concat(includeSpecialCharacters);
    finalPassword.concat(randomCharacter(includeSpecialCharacters));
    }
    

    for (var i =finalPassword.length+1; i < passwordLength; i++){
      finalPassword.concat(randomCharacter(userChoice));  
    }
    return ()
  }

  function randomCharacter(characterarray){
    var charIndex= math.floor(math.random() * characterarray.length);
    return characterarray[charIndex]
  }

    function mygeneratePassword(){
      var passwordText = document.querySelector("#mygeneratepasword");    
      var passwordText = document.querySelector("#password");

  passwordText.value = password;
    }
//console.log(includeSpecialCharacters);
    

//Generate password?



//function generatePassword(){
     
    
     
   
//generatePassword.addEventListener("click",mygeneratedPassword);
// Add event listener to generate button
generateBtn.addEventListener("click", mygeneratePassword);
    }
console.log(generateBtn);
    
  }
