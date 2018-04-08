// ##Strings and Associative Arrays Day 4

// ###Recreate these built-in functions from JavaScript’s string library:


// ###String.concat
// `string1.concat(str2,str3,...,strX)` - add string(s) to end of existing one. Return new string.

// var str1 = "test1";
// var str2 = "test2";
// var str3 = "test3";
// var str4 = "test4";
// // string = string.concat(str1, str2, str3, str4);
// console.log(concatstrs(str1,str2,str3));
// console.log(concatstrs(str1,str2,str3,str4));
//
// function concatstrs(){
//     var new_str = "";
//     for(var i = 0; i < arguments.length; i++){
//         new_str += arguments[i];
//     }
//     return new_str;
// }

// ###String.slice
// `string.slice(start,end)` - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.
// + Bonus: include support for negative indices, representing offsets from string-end. Example: `string.slice(-1)` returns the string’s last character.

// var test = "testing";
// console.log(strsplice(test,2,4));
// console.log(strsplice(test,-1));
// function strsplice(str,start,end){
//     var arr = str.split("");
//     var new_arr = [];
//     if (start == undefined){
//         start = 0;
//     } else if (start < 0){
//         start = str.length + start;
//     }
//     if (end == undefined){
//         end = str.length - 1;
//     }
//     for(var i = start; i <= end; i++){
//         new_arr.push(arr[i]);
//     }
//     return new_arr.join("");
// }

// ###String.trim
// `string.trim()` - remove whitespace (spaces, tabs, newlines) from both sides, and return a new
// string.
// + Example: `"\n hellogoodbye\t ".trim()` should return `"hellogoodbye"`.

// var test_str = "  \n    hello goodbye \t   ";
// console.log("\"" + trimstr(test_str) + "\"");
// function trimstr(str){
//     var arr = str.split("");
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] == "\\" && arr[i + 1] == "n"){
//             arr[i] = "";
//             arr[i + 1] = "";
//         } else if(arr[i] == "\\" && arr[i + 1] == "t"){
//             arr[i] = "";
//             arr[i + 1] = "";
//         } else if(arr[i] == " "){
//             arr[i] = "";
//         }
//     }
//     return arr.join("");
// }


// ###String.split
// `string.split(separator,limit)` - split string into array of substrings, returning the new array. Separator specifies where to divide substrings and is not included in any substring. If `""` is specified, split string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded.
// + Note: existing string is unaffected.

// var a = "testing a test string";
// function strsplit(str,separator,limit){
//     var newstr = "";
//     var arr = [];
//
//     limit = limit || -1;
//     separator = separator || "";
//
//     //set so we're not calling the length function repeatedly
//     var l = str.length;
//     var al = arr.length;
//
//     for(var i = 0; i < l; i++){
//         if(al <= limit - 1 || limit == -1){
//             if(str[i] == separator){
//                 arr.push(newstr);
//                 newstr = "";
//             } else if (separator == ""){ //split all characters in the string
//                 arr.push(str[i]);
//             } else {
//                 newstr += str[i];
//             }
//         }
//     }
//     return arr;
// }
//
// console.log(strsplit(a," ",3));
// console.log(strsplit(a,"",3));
// console.log(strsplit(a," "));
// console.log(strsplit(a));
// ###String.search
// `string.search(val)` - search string for val (another string). Return index position of first match (`-1` if not found).

// var a = "hello";
// function strsearch(needle,haystack){
//
//     var l = haystack.length - 1;
//     var n = needle.length;
//     var found = false;
//     var index = -1;
//
//     for(var i = 0; i < l; i++){
//         // console.log(i,haystack[i]);
//         for(var x = 0; x < n; x++){
//             // console.log(x,"-",haystack[i + x],"-",needle[x]);
//             if(needle[x] == haystack[x + i]){
//                 found = true;
//             } else if (needle[x] != haystack[x+i]){
//                 found = false;
//                 break; //break out of loop since no point in checking rest
//             }
//         }
//         if(found){
//             index = i;
//             break; //break out of loop since we have found the needle, set position to where we found needle
//         }
//     }
//     // console.log(found);
//     return index;
// }
// console.log(strsearch("el",a));
// console.log(strsearch("lo",a));
