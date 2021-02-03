//Special characters array
var specialCharacters = ["~", "!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", ":", ";", "<", ">", "?", "/"];

//Numbers array
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Lowercase array
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Uppercase array
var uppercaseChracters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Function prompting user for password variations
function getPasswordOptions() {
  //Ask user how long the password should be
  var length = parseInt(
    prompt("How many characters would you like your password to have?")
  );
  //Make sure passLength is given as a number
  if (isNaN(length) === true) {
    alert("Your answer must be provided as a number.");
    return;
  }
  //Make sure passLength is at least 8
  if (length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }
  //Make sure passLength is no more than 50
  if (length > 50) {
    alert("Password must be less than 50 characters.")
    return;
  }

  //Store Boolean answers for password variations
  var incSpecialChar = confirm("Click OK to include special characters.");
  var incNumberChar = confirm("Click OK to include numbers.");
  var incLowerChar = confirm("Click OK to include lowercase letters.");
  var incUpperChar = confirm("Click OK to include uppercase letters.");

  //User must choose at least one type of character
  if (
    incSpecialChar === false &&
    incNumberChar === false &&
    incLowerChar === false &&
    incUpperChar === false
  ) {
    alert("You must select at least one character type.");
    return;
  }

  //Storing user input
  var passOptions = {
    length: length,
    incSpecialChar: incSpecialChar,
    incNumberChar: incNumberChar,
    incLowerChar: incLowerChar,
    incUpperChar: incUpperChar
  };
  return passOptions;
}



//Get random element from array
function getRandom(arr) {
  var randomLength = Math.floor(Math.random() * arr.length);
  var randomArray = arr[randomLength];
  return randomArray;
}

//Create password w/ user input
function createPassword() {
  var options = getPasswordOptions();
  var result = [];
  var possCharacters = [];
  var chosenChar = [];

  if (options.incSpecialChar) {
    possCharacters = possCharacters.concat(specialCharacters);
    chosenChar.push(getRandom(specialCharacters));
  }
  if (options.incNumberChar) {
    possCharacters = possCharacters.concat(numberCharacters);
    chosenChar.push(getRandom(numberCharacters));
  }
  if (options.incLowerChar) {
    possCharacters = possCharacters.concat(lowercaseCharacters);
    chosenChar.push(getRandom(lowercaseCharacters));
  }
  if (options.incUpperChar) {
    possCharacters = possCharacters.concat(uppercaseChracters);
    chosenChar.push(getRandom(uppercaseChracters));
  }
  //For loop!!
  for (var i = 0; i < options.length; i++) {
    var possible = getRandom(possCharacters);
    result.push(possible);
  }
  //For loop for results
  for (var i = 0; i < chosenChar.length; i++) {
    result[i] = chosenChar[i];
  }
  //Resulting string
  return result.join(" ");
}


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var newPassword = createPassword();
  var printPassword = document.querySelector("#password");

  printPassword.value = newPassword;
}

//Add event listener
generateBtn.addEventListener("click", writePassword);