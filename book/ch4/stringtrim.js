var test_str = "  \n    hello goodbye \t   ";
console.log("\"" + trimstr(test_str) + "\"");
function trimstr(str){
    var arr = str.split("");
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "\\" && arr[i + 1] == "n"){
            arr[i] = "";
            arr[i + 1] = "";
        } else if(arr[i] == "\\" && arr[i + 1] == "t"){
            arr[i] = "";
            arr[i + 1] = "";
        } else if(arr[i] == " "){
            arr[i] = "";
        }
    }
    return arr.join("");
}
