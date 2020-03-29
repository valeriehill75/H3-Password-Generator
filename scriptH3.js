// Assignment Code
var generateBtn = document.querySelector("#generate");
event.preventDefault ()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function submitButton () {
//designate min, max, and special character parameters
var minCharacter = prompt("Enter the minimum number of characters in your password.\n(Must be at least 8)")
var maxCharacter = prompt("Enter the maximum number of characters in your password.\n(Must be fewer than 128)")
var specCharacter = prompt("Include special characters? (Y/N)")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





