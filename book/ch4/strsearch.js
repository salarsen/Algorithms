var a = "hello";
function strsearch(needle,haystack){

    var l = haystack.length - 1;
    var n = needle.length;
    var found = false;
    var index = -1;

    for(var i = 0; i < l; i++){
        // console.log(i,haystack[i]);
        for(var x = 0; x < n; x++){
            // console.log(x,"-",haystack[i + x],"-",needle[x]);
            if(needle[x] == haystack[x + i]){
                found = true;
            } else if (needle[x] != haystack[x+i]){
                found = false;
                break; //break out of loop since no point in checking rest
            }
        }
        if(found){
            index = i;
            break; //break out of loop since we have found the needle, set position to where we found needle
        }
    }
    // console.log(found);
    return index;
}
console.log(strsearch("el",a));
console.log(strsearch("lo",a));
