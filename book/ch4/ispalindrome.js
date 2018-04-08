var a = "racecar";
console.log(isPalindrome(a));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("oho!"));
console.log(isPalindrome("a x a"));
console.log(isPalindrome("hello"));
// function isPalindrome(str){
//     var letterArr = str.split("");
//     var palindrome = true;
//     for (i = 0; i < (letterArr.length - 1) / 2; i++){
//         if (letterArr[i] != letterArr[letterArr.length - 1 - i]){
//             palindrome = false;
//             break;
//         }
//     }
//     return palindrome;
// }

function isPalindrome(str){
    var letterArr = str.split("");
    var searchStr = new RegExp("[^a-zA-Z0-9]");
    for (var i = 0; i < letterArr.length; i++){
        if(searchStr.test(letterArr[i])){
            // console.log("Replacing " + letterArr[i]);
            letterArr[i] = "";
        } else {
            letterArr[i] = letterArr[i].toLowerCase();
        }
    }
    letterArr = letterArr.join("").split("");
    // console.log(letterArr);
    var palindrome = true;
    for (i = 0; i < (letterArr.length - 1) / 2; i++){
        if (letterArr[i] != letterArr[letterArr.length - 1 - i]){
            palindrome = false;
            break;
        }
    }
    return palindrome;
}
