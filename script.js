
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

const chars = [
  'qwertyuiopasdfghjklzxcvbnm'.split(""),
  'QWERTYUIOPASDFGHJKLZXCVBNM'.split(""),
  '1234567890'.split(""),
  '!@#$%^_+=][}{;:<>'.split("")
];
console.log(chars);
cdrs = [];
const butty = document.querySelectorAll(".card-footer")[0].children[0]

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
  const len = prompt("What is the minimum length required?");
  return Number(len)
}

function gLen() {
  const lenStr = prompt("What is the minimum length required?");
  if (isNum(lenStr)) {
    return Number(lenStr); 
  }
  else {
    alert("Invalid Input");
    gLen();
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
  console.log(passy);
  if (passy.lowers) {cdrs.push(chars[0])};
  if (passy.uppers) {cdrs.push(chars[1])};
  if (passy.numbers) {cdrs.push(chars[2])};
  if (passy.specials) {cdrs.push(chars[3])};
  console.log(cdrs);
}

function gp() {
  const len = getLen();
  getSpecials();
  let pw = '';
  for (let i = 0; i < (len - cdrs.length); i++) {
    let q = cdrs[Math.floor((cdrs.length)*Math.random())];
    pw += q[Math.floor((q.length)*Math.random())];
  }
  for (let i of cdrs) {
    pw += i[Math.floor((i.length)*Math.random())]
  }
  return pw;
}


function write() {
  var password = gp();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

console.log(butty);
butty.addEventListener("click", write())

