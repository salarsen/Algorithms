// 11/28/2016 REVERSE STRING && REMOVE BLANKS
// Implement reverseString(str) that, given string, returns that string with characters reversed. Given 'creature', return 'erutaerc'. Tempting as it seems, do not use the built-in reverse()!
// Create a function that, given a string, returns the string, without blanks. Given " play that Funky music ", returns a string containing "playthatFunkymusic".

// var a = "creature";
// console.log(a);
// console.log(reverseString(a));
// function reverseString(str){
//     var new_str = [];
//     var letterArr = str.split("");
//     for (i = letterArr.length - 1; i >= 0; i--){
//         new_str.push(letterArr[i]);
//     }
//     return new_str.join("");
// }
//
// var a = " play that Funky music ";
// console.log(removeBlanks(a));
// function removeBlanks(str){
//     return str.split(" ").join("");
// }

// No Recording

// 11/29/2016 ISPALINDROME() && GETDIGITS()
// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" of "oho!", return false.
// bonus: Now do ignore white spaces (spaces, tabs, returns), capitalization and punctuation.
// Create a function taht given a string returns the integer made from the string's digits. Given "0s1a3y5w7h9a2t4?6!80", the function should return the number 1,357,924,680.
// Session - https://vimeo.com/193619747/140303543f
// var a = "racecar";
// console.log(isPalindrome(a));
// console.log(isPalindrome("Dud"));
// console.log(isPalindrome("oho!"));
// console.log(isPalindrome("a x a"));
// function isPalindrome(str){
//     var letterArr = str.split("");
//     var palindrome = true;
//     for (i = 0; i < (letterArr.length - 1) / 2; i++){
//         if (letterArr[i] != letterArr[letterArr.length - 1 - i])
//             palindrome = false;
//     }
//     return palindrome;
// }
//
// var b = "0s1a3y5w7h9a2t4?6!80";
// console.log(getDigits(b));
// function getDigits(str){
//     var letterArr = str.split("");
//     var new_str = [];
//     for (i = 0; i < letterArr.length - 1; i++){
//         if (letterArr[i] >= 0 && letterArr[i] <= 9){
//             new_str.push(letterArr[i]);
//         }
//     }
//     return new_str.join("");
// }

// 11/30/2016 STRING.SPLIT(CHAR, LIMIT) && ARRAY.JOIN(CHAR)
// Recreate the built-in JS methods, String.split() and Array.join as stand alone functions that take a string/array as parameters in addition to their normal parameters. Base your implementation off of w3schools documentation. Example: newSplit('abcdefg','',2) should return ['a','b'].
// Session - https://vimeo.com/193802036

var a = "abcdefg";

// 12/1/2016 ARRAYSTOMAP && COINCHANGEOBJECT
// Associative Arrays, or Objects, are sometimes referred to as maps, because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ['abc', 3, 'yo'] and arr2 = [42, 'wassup', true], arraysToMap(arr1, arr2) should return {'abc': 42, '3':'wassup', 'yoo': true}
// Session - https://vimeo.com/album/4281485/video/193958597

// 12/2/2016 PARENS VALID && BRACES VALID
// Create a function parensValid(str) that takes a string that may contain parentheses and determine if the parentheses are in a valid order. Given "h(e(l)l)0" return true. Given "n)o(p)e" return false.
// Create a function bracesValid(str) that takes a string that may contain parentheses, braces, and brackets, and determine if they are in a valid format. Given "{h(e)y}[]" return true. Given "{h(e}l[l)o]" return false. There are many more examples of true and false varieties.
// Session - https://vimeo.com/194127428/eec1968ce5

// 12/8/2016 LONGEST COMMON SUFFIX
// Lance is writing his opus: Epitome, an epic tome of beat poetry. Always ready for a good rhyme, he contantly seeks words that end with the same letters. Write a function that, when given a word array, returns the largest suffix(word-end) common to all words in the array. For input ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not very creative). If input is ["nice", "ice", "baby"], return "".
// Session - https://vimeo.com/album/4281485/video/194903365

// 12/9/2016 DNA TRANSCRIPTION && INVERT HASH
// Given an input string consisting of DNA nucleotides, e.g. 'ACGGGTAAG', return a list of the amino acids that would be assembled by the corresponding string of mRNA, in this case the mRNA strand would be 'UGCCCAUUC', which would produce a list of these amino-acids ['Cys','Pro','Phe']. The process is thus, DNA ('ACGGGTAAG') is converted to mRNA('UGCCCAUUC') which is then turned into codons ('UGC', 'CCA',UUC), which are then turned into nucleotides(Cys, Pro, Phe) using a codon chart.
// Additionally, write an algorithm that given a hash(Associative Array), returns the hash with previous keys as values and the values as keys. For example, invert({'a':'b'}) => {'b':'a'}. There are a wide variety of edge cases for this, it is up to you to document how and why you handle certain cases a certain way.
// Session - https://vimeo.com/195051444
