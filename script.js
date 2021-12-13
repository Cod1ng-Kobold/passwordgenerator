// Assignment Code
var generateBtn = document.getElementById(password);

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordLength = 16;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
}

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }

 document.getElementById("password").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);