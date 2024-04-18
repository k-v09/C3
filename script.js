
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


const generateBtn = document.querySelector("#generate");

function isNum (inp) {
  const nums = '1234567890'.split("");
  for (let i = 0; i < inp.length; i++) {
    let ticker = false;
    for (let j = 0; j < nums.length; j++) {
      if (inp[i] == nums[j]) {
        ticker = true;
      }
    }
    if (!ticker) {
      return ticker
    }
  }
  return true
}

function getLen() {
  const lenStr = prompt("What is the minimum length required?");
  if (isNum(lenStr)) {
    return Number(lenStr); 
  }
  else {
    alert("Invalid Input");
    getLen();
  }
}

class PassChar {
  constructor(lowers, uppers, numbers, specials) {
    this.lowers = lowers;
    this.uppers = uppers;
    this.numbers = numbers;
    this.specials = specials;
  }
  checkTypes () {
    if (!this.uppers && !this.lowers && !this.lowers && !this.specials) {
      return false
    }
  }
}

function getSpecials() {
  let passy = new PassChar(
    confirm("Should your password include lower case letters?"),
    confirm("Should your password include upper case letters?"),
    confirm("Should your password include numbers?"),
    confirm("Should your password include special characters?")
  )
  if (!passy.checkTypes()) {
    passy.lowers = true;
  }
  return passy
}

function gp() {
  const len = getLen();
  const specials = getSpecials();
}


function write() {
  var password = gp();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", write())

