var a = "Dylan";
console.log(getJiggy(a));
function getJiggy(str){
    var strArr = str.split("");
    var returnStr = [];
    for(var i = 1; i < strArr.length; i++){
        if (i == 1){
            returnStr = returnStr.concat(strArr[i].toUpperCase());
        } else {
            returnStr = returnStr.concat(strArr[i]);
        }
    }
    returnStr = returnStr.concat(" to the ");
    returnStr = returnStr.concat(strArr[0].toUpperCase());
    returnStr = returnStr.concat("!");
    return returnStr.join("");
}
