console.log(prevLen(["test","testing","hello","goodbye"]));
function prevLen(arr){
    var length = 0;
    for(var i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i].length;
    }
    return arr;
}
