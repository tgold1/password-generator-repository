// Assignment Code
var specialcharacters = ["#", "@", "!", "$", "%", "^", "&", "*", "_", "-","<", ">", "?", ".", "+"]
var Uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword () { 
  var numberofcharacters = window.prompt("How many characters would you like your password to be?")
  if (numberofcharacters < 8 == true) {window.alert("Character length must be between 8-128 characters."); return generatePassword();} 
  else if(numberofcharacters >128 == true) {window.alert ("Character length must be between 8-128 characters."); return generatePassword();}
  
  else {
 

  var spcharacters = window.confirm("Would you like to use special characters?");
  var upcaseletter = window.confirm("Would you like to use Uppercase letters?" );
  var locaseletter = window.confirm("Would you like to use Lowercase letters?");
  var numrs =  window.confirm("Would you like to use Numbers?");

  

var Newarray = [];

if (spcharacters == true) {
  Newarray = Newarray.concat(specialcharacters)

}

if (upcaseletter == true) {
  Newarray = Newarray.concat(Uppercaseletters)
}

if (locaseletter == true) {
  Newarray = Newarray.concat(Lowercaseletters)
}

if (numrs == true)  {
  Newarray = Newarray.concat(Numbers)
}

var randompassword = "";
for (let i = 0; i< numberofcharacters; i++) {

  var index = Math.floor(Math.random () * Newarray.length)

  randompassword = randompassword + Newarray[index];
}

return randompassword;
 
  
}
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
