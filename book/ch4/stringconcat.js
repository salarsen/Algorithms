var str1 = "test1";
var str2 = "test2";
var str3 = "test3";
var str4 = "test4";
// string = string.concat(str1, str2, str3, str4);
console.log(concatstrs(str1,str2,str3));
console.log(concatstrs(str1,str2,str3,str4));

function concatstrs(){
    var new_str = "";
    for(var i = 0; i < arguments.length; i++){
        new_str += arguments[i];
    }
    return new_str;
}
