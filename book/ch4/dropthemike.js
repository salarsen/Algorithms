var a = " this is a test! ";
var b = " mike was here!";
console.log(a);
console.log(dropthemike(a));
console.log(b);
console.log(dropthemike(b));
// function dropthemike(str){
//     var mike_str = new RegExp("mike");
//     if(mike_str.test(str)){
//         return "stunned silence";
//     } else {
//         var wordArr = str.replace(/^ /,"").replace(/ $/,"").split(" ");
//         for(var i = 0; i < wordArr.length; i++){
//             wordArr[i] = wordArr[i].replace(/^[a-z]/,function(x){ return x.toUpperCase(); });
//         }
//         return wordArr.join(" ");
//     }
// }

function dropthemike(str){
    if(search_str(str,"mike")){
        return "stunned silence";
    } else {
        var wordArr = str.split("");
        if(wordArr[0] == " "){
            wordArr[0] = "";
        }
        if(wordArr[wordArr.length - 1] == " "){
            wordArr[wordArr.length - 1]  = "";
        }
        if(wordArr[0] >= 'a' && wordArr[0] <= 'z'){
            wordArr[0] = wordArr[0].toUpperCase();
        }
        for(var i = 0; i < wordArr.length; i++){
            if((wordArr[i - 1] == " " || wordArr[i-1] == "") && (wordArr[i] >= 'a' && wordArr[i] <= 'z')){
                wordArr[i] = wordArr[i].toUpperCase();
            }
        }
        return wordArr.join("");
    }
}

function new_substr(str,start,end){
    if(start > str.length || end > str.length || start > end){
        return str;
    } else {
        var old_str = str.split("");
        var new_str = [];
        for(var i = start; i < end && i < str.length; i++){
            new_str.push(old_str[i]);
        }
        return new_str.join("");
    }
}

function search_str(haystack, needle){
    var found = false;
    var substring = "";
    for(var i = 0; i < haystack.length; i++){
        for (var x = haystack.length; x > i; x--){
            substring = new_substr(haystack, i, x);
            if(substring == needle){
                found = true;
                break;
            }
        }
        if(found){
            break;
        }
    }
    return found;
}
