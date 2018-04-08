var a = "testing a test string";
function strsplit(str,separator,limit){
    var newstr = "";
    var arr = [];

    limit = limit || -1;
    separator = separator || "";

    //set so we're not calling the length function repeatedly
    var l = str.length;
    var al = arr.length;

    for(var i = 0; i < l; i++){
        if(al <= limit - 1 || limit == -1){
            if(str[i] == separator){
                arr.push(newstr);
                newstr = "";
            } else if (separator == ""){ //split all characters in the string
                arr.push(str[i]);
            } else {
                newstr += str[i];
            }
        }
    }
    return arr;
}

console.log(strsplit(a," ",3));
console.log(strsplit(a,"",3));
console.log(strsplit(a," "));
console.log(strsplit(a));
