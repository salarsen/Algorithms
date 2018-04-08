// remove short strings
var a = ["string","hello","what","hi","cherry"];
console.log(removeShortStrings(a,5));
function removeShortStrings(oldArr,length){
    var newArr = [];
    for(i = 0; i < oldArr.length; i++){
        if(oldArr[i].length > length){
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}
