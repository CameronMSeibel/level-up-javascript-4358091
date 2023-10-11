// Write your code here
function validatePassword(password) {
  let lowerCase = /[a-z]/;
  let upperCase = /[A-Z]/;
  let oneDigit = /[0-9]/;
  let oneSpecial = /[^A-Za-z\d\s]/;
  let eightCharacters = /.{8,}/
  let isValid = 
    lowerCase.test(password) &&
    upperCase.test(password) &&
    oneDigit.test(password) &&
    oneSpecial.test(password) &&
    eightCharacters.test(password);
  return isValid ? "Yea" : "Nah";
}

console.log(validatePassword("Password123"));
console.log(validatePassword("9Ab!4567"));