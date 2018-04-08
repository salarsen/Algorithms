
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

console.log(search_str("mike was here!","mike"));
