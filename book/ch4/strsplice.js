var test = "testing";
console.log(strsplice(test,2,4));
console.log(strsplice(test,-1));
function strsplice(str,start,end){
    var arr = str.split("");
    var new_arr = [];
    if (start == undefined){
        start = 0;
    } else if (start < 0){
        start = str.length + start;
    }
    if (end == undefined){
        end = str.length - 1;
    }
    for(var i = start; i <= end; i++){
        new_arr.push(arr[i]);
    }
    return new_arr.join("");
}
