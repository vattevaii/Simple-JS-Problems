function palindrome(str) {
    if(str.length == 1) return false;
    return (str == str.split('').reverse().join(''));
  }

function getPalindromes(str) {
  var i, j, result = [];
    
  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length; j++) {
        //console.log(str.slice(i,j));
        if(palindrome(str.slice(i,j)))
          result.push(str.slice(i, j));
      }
  }
  return result;
}

var pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
pi.shift();pi.shift();

allRes = getPalindromes(pi);

console.log(allRes);

s = new Set(allRes);

sum = 0;

for(let i of s) sum = sum+parseInt(i);

console.log(sum);