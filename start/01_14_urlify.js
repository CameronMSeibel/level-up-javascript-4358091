// Write your code here
function urlify(string) {
  let result = string.toLowerCase();
  result = result.replace(/[^\w\s]/g, "");
  result = result.replace(/\s/g, "-");
  return result;
}

console.log(urlify("Emma's blog name!"));