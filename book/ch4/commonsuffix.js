var a = ["deforestation","citation","conviction","incrceration"];
var b = ["nice","ice","baby"];
console.log("a - " + commonSuffix(a));
console.log("b - " + commonSuffix(b));
function commonSuffix(wordArr){
    var suffix = "";
    var suffix_found = true;
    while(suffix_found != false){
        for(var x = 0; x < wordArr.length; x++){
            if (x == 0 && suffix.length != wordArr[x].length){
                // suffix = wordArr[x].substr(wordArr[x].length - suffix.length - 1, wordArr[x].length);
                suffix = new_substr(wordArr[x],wordArr[x].length - suffix.length - 1, wordArr[x].length);
            } else {
                if(suffix != wordArr[x].substr(wordArr[x].length - suffix.length,wordArr[x].length)){
                    // suffix = suffix.substr(1,suffix.length);
                    suffix = new_substr(suffix,1,suffix.length);
                    suffix_found = false;
                    break;
                }
            }
        }
    }
    if (suffix.length != 0){
        return suffix;
    } else {
        return "";
    }
}

// console.log(new_substr("testing",0,6));

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
