// Assignment Code
var numberofcharacters = 0
var answer = numberofcharacters
var specialcharacters = 0
var Uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword () { 
  window.prompt("How many characters would you like your password to be?")
  window.confirm("Would you like to use special characters?");
  window.confirm("Would you like to use Uppercase letters?" );
  window.confirm("Would you like to use Lowercase letters?");
  window.confirm("Would you like to use Numbers?");
//if (numberofcharacters < 8) {
//  prompt = "Password must be a minimum of 8 characters";
//}
//if (numberofcharacters > 128) {
  prompt = "Password must be a maximum of 128 characters";
//}
 
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
