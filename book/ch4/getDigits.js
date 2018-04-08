// getDigits
var a = "0s1a3y5w7h9a2t4?6!8?0";
console.log(getDigits(a));
function getDigits(a_str){
    wordArray = a_str.split("");
    var num_str = [];
    for (var i = 0; i < wordArray.length; i++){
        if (wordArray[i] >= 0 && wordArray[i] <= 9){
            num_str.push(wordArray[i]);
        }
    }
    return num_str.join("");
}
