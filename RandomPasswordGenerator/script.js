const passwordBox = document.querySelector("#Password");
const length = 12 ;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=?";

const combination = upperCase + lowerCase + number + symbol ;

function createPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)] ;
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)] ;
  password += number[Math.floor(Math.random() * number.length)] ;
  password += symbol[Math.floor(Math.random() * symbol.length)] ;

  while(password.length < length){
    password += combination[Math.floor(Math.random() * combination.length)] ;
  }

  passwordBox.value = password ;
}

function copyPassword(){
  passwordBox.select() ;
  document.execCommand("copy");
}

