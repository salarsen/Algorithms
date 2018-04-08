// 1/10/2017 ISPALINDROME() && GET DIGITS()

// isPalindrome(): Create a function that returns a boolean whether the string is a strict palindrome. For 'a x a' or 'racecar', return true. Do NOT ignore spaces, punctuation, and capitalization: if given 'Dud' or 'oho!', return false.
// lvl 2: now do ignore white space(spaces, tabs, new lines), capitalization, punctuation.

console.log(isPalindrome('a x a'));
console.log(isPalindrome('Dud'));
console.log(isPalindrome('oho!'));
console.log(isPalindrome('racecar'));

function isPalindrome(str){
   var len = str.length;
   for(var i = 0; i < len /2; i++){
      if(str[str.length - i - 1] != str[i]){
         return false;
      }
   }
   return true;
}

// getDigits(): Create a JavaScript function that given a string, returns the integer made from the string's digits. Given '0a1b2c3d4e', the function should return 1234.

// https://vimeo.com/199481937/b39d4a6968

console.log(getDigits('0a1b2c3d4e'));

function getDigits(str){
   var len = str.length;
   var new_str = '';
   for(var i = 0; i < len; i++){
      if(str[i] >= 0 && str[i] <= 9){
         new_str += str[i];
      }
   }
   return new_str;
}
