// Write your code here
function nCombinations(string) {
  function factorial(value) {
    if(value <= 1) {
      return 1;
    } else {
      return value * factorial(value - 1);
    }
  }

  return factorial(string.length);
}

console.log(nCombinations(""));