// Assignment Code
///var generateBtn = document.querySelector("#generate");
event.preventDefault ()

// Add event listener to generate button
///generateBtn.addEventListener("click", writePassword)

function submitButton () {
//designate number of characters, and special character parameters
  var passCharacter = prompt("Enter the number of characters in your password.\n(Must be at least 8 and fewer than 128)");
    if (passCharacter < 8 || passCharacter === null) {
      alert ("Please enter the correct response.");
    }

  var specCharacter = prompt("Include special characters? Uppercase? Lowercase? Numbers? Special Characters?\n(Enter at least one of the above)");
    if (specCharacter === null || specCharacter !== Y || specCharacter !== N) {
      alert ("Please enter the correct response."); 
    }
}

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword(); {
//    let passLength = document.getElementById("passCharacter").value

//    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()-_=+[]\{}|;':",./<>?";

//    let passLength = "";

//    for (var i = 0, i <= passLength; i++)
//      password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
//  }
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

}





