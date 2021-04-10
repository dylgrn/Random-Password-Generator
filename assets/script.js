var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",writePassword);

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '>', '<', '?', '/'];
var length = "";

var lowerP;
var upperP;
var numberP;
var symbolP;

function generatePassword() {
var length = prompt("Select number of charcters for password 8-128");
    while(length <= 7 || length >= 128) {
        alert("Your password must contain 8-128 characters");
     var length = ("Select number of charcters for password 8-128")
    }    

var lowerP = confirm("Would you like your password to contain lowercase letters?");
var upperP = confirm("Would you like your password to contain uppercase letters?");
var numberP = confirm("Would you like your password to contain numbers?");
var symbolP = confirm("Would you like your password to contain special characters?");
    while (lowerP === false && upperP === false && numberP === false && symbolP === false) {
        alert("You must choose at least one charcter set");
        var lowerP = confirm("Would you like your password to contain lowercase letters?");
        var upperP = confirm("Would you like your password to contain uppercase letters?");
        var numberP = confirm("Would you like your password to contain numbers?");
        var symbolP = confirm("Would you like your password to contain special characters?");
    }

var passwordP = []

if (lowerP) {
    passwordP = passwordP.concat(lower)
}

if (upperP) {
    passwordP = passwordP.concat(upper)
}

if (numberP) {
    passwordP = passwordP.concat(number)
}

if (symbolP) {
    passwordP = passwordP.concat(symbol)
}
console.log(passwordP)

var passwordR = ""

for (var i = 0; i < length; i++) {
    passwordR = passwordR + passwordP[Math.floor(Math.random() * passwordP.length)];
    console.log(passwordR)
}
return passwordR;
}
// Get references to the #generate element
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Write password to the #password input

}
// Add event listener to generate button
