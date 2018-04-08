// string reverse
var a = "creature";
console.log(a);
console.log(reverseString(a));
function reverseString(str){
    var new_str = [];
    var letterArr = str.split("");
    for (i = letterArr.length - 1; i >= 0; i--){
        new_str.push(letterArr[i]);
    }
    return new_str.join("");
}
