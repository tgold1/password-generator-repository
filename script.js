// Assignment Code
var specialcharacters = ["#", "@", "!", "$", "%", "^", "&", "*", "_", "-","<", ">", "?", ".", "+"]
var Uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword () { 
  var numberofcharacters = window.prompt("How many characters would you like your password to be?")
  if (numberofcharacters < 8 == true) window.alert("Character length must be between 8-128 characters.") 
  else if(numberofcharacters >128 == true) window.alert ("Character length must be between 8-128 characters.")
  
  else
 

  window.confirm("Would you like to use special characters?");
  window.confirm("Would you like to use Uppercase letters?" );
  window.confirm("Would you like to use Lowercase letters?");
  window.confirm("Would you like to use Numbers?");

  return

if (specialcharacters == true) {
  specialcharacters.concat (specialcharacters)

}

if (Uppercaseletters == true) {
  Uppercaseletters.concat (Uppercaseletters)
}

if (Lowercaseletters == true) {
  Lowercaseletters.concat (Lowercaseletters)
}

if (Numbers == true)  {
  Numbers.concat (Numbers)
}

var index = math.floor(math.random () * password.length)

for (let i = 0; i< password.length; i++) {

}


 
  return ;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
