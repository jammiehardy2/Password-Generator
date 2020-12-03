//scriptjs
//Assignment
var generateBtn = document.querySelector("#generate");
var includeNumbers = ["1","2","3","4","5","6","7","8","9","0"];
var includeUpperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var includeLowerCaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var includeSpecialCharacters=["!","@","#","%","^","&","*","(",")","~","?","/"];
var userChoice=[];
//My arrays


// Write password to the #password input
function myFunctionPassword(){
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
  //var passwordCreated=[];
  //function mygeneratePassword(){
   // var passwordText = document.querySelector("#mygeneratePassword");  

//var userChoicePasswordLength =prompt (passwordLength < -128 && passwordLength >-8)
//If (passwordLength <128 && passwordLength >8)

 
//Choosing the password inputs
var passwordLength =InputEvent("Password must be between 8 and 128 characters long")
    if (passwordLength) 
    userChoice = userChoice(passwordLength < -128 && passwordLength >-8);  
}
var userChoiceNumber =confirm("do you want numbers")
    if (userChoiceNumber) 
    userChoice = userChoice.concat(includeNumbers);

//console.log (includeNumbers)
var userChoiceUppercase =confirm("do you want Uppercase Characters") 
    if (userChoiceUppercase) {
    userChoice = userChoice.concat(includeUpperCaseCharacters);

//console.log (includeUpperCaseCharacters)
    }
var userChoiceLowercase =confirm("do you want Lowercase Characters")
    if (userChoiceLowercase)
    userChoice = userChoice.concat(includeLowerCaseCharacters);
    
//console.log (includeLowerCaseCharacters)
  
  var userChoiceSpecialCharacters =confirm("do you want Special Characters")
    if (userChoiceSpecialCharacters)
    userChoice = userChoice.concat(includeSpecialCharacters);

    function mygeneratePassword(){
      var passwordText = document.querySelector("#mygeneratepasword");    
    
//console.log(includeSpecialCharacters);
    

  var userChoiceFinal = [];
    for (var i =0; i <- passwordLength; i++){
    var password = math.floor(math.random() * userChoice.passwordLength);
    userChoice=userChoice.concat;
  
    
  console.log(userChoice.join(""));
//Generate password?



//function generatePassword(){
     
    
     
   
//generatePassword.addEventListener("click",mygeneratedPassword);
// Add event listener to generate button
generateBtn.addEventListener("click", mygeneratePassword);
    }
console.log(generateBtn);
    
  }
