var a = "what up, daddy-o?";
var b = "Yikes! my favorite racecar erupted!";
var c = "uh. not much";
var d = "Hot puree eruption!";
longestPalindrome(a);
longestPalindrome(b);
longestPalindrome(c);
longestPalindrome(d);
//old
// function longestPalindrome(str){
//     var max_length = 0;
//     var longest_palidrome = "";
//     // first we start on left side
//     for(var i = 0; i < str.length; i++){
//         var sub_str = str.substr(i, str.length);
//         // now we start to widdle down the right side, checking each string as we go
//         for(var x = sub_str.length; x >= 0; x--){
//             var check_sub_str = sub_str.substr(0,x); // start at 0 index of the substring, if we did .str it would be i instead
//             if (isPalindrome(check_sub_str) && check_sub_str.length > max_length){ // if palindrome and longer than current palindrome, update!
//                 max_length = check_sub_str.length;
//                 longest_palidrome = check_sub_str;
//             }
//         }
//     }
//     console.log(longest_palidrome+" ("+max_length+")");
// }

function isPalindrome(str){
    var letterArr = str.split("");
    var palindrome = true;
    for (i = 0; i < (letterArr.length - 1) / 2; i++){
        if (letterArr[i] != letterArr[letterArr.length - 1 - i]){
            palindrome = false;
            break;
        }
    }
    return palindrome;
}
function longestPalindrome(str){
    // this will filter out all non letters and numbers
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
    str = letterArr.join("");
    var max_length = 0;
    var longest_palidrome = "";
    // first we start on left side
    for(var i = 0; i < str.length; i++){
        var sub_str = str.substr(i, str.length);
        // now we start to widdle down the right side, checking each string as we go
        for(var x = sub_str.length; x >= 0; x--){
            var check_sub_str = sub_str.substr(0,x); // start at 0 index of the substring, if we did .str it would be i instead
            if (isPalindrome(check_sub_str) && check_sub_str.length > max_length){ // if palindrome and longer than current palindrome, update!
                max_length = check_sub_str.length;
                longest_palidrome = check_sub_str;
            }
        }
    }
    console.log(longest_palidrome+" ("+max_length+")");
}
function isPalindrome(str){
    var letterArr = str.split("");
    var palindrome = true;
    for (i = 0; i < (letterArr.length - 1) / 2; i++){
        if (letterArr[i] != letterArr[letterArr.length - 1 - i]){
            palindrome = false;
            break;
        }
    }
    return palindrome;
}

function divider(div_char, count){
    var div_str = [];
    for (var i = 0; i < count; i++){
        div_str.push(div_char);
    }
    console.log(div_str.join(""));
}
