var a = "facetiously";
var b = "arseniously";
var c = "testing";
console.log(isalphabetical(a));
console.log(isalphabetical(b));
console.log(isalphabetical(c));
function isalphabetical(str){
    var alpha = ["u","o","i","e","a"];
    var strArr = str.split("");
    for (var i = 0; i < strArr.length; i++){
        if(strArr[i] == alpha[alpha.length - 1]){
            alpha.pop();
        }
    }
    if (alpha.length == 0){
        return true;
    } else {
        return false;
    }
}
