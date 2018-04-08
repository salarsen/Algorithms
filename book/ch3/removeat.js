//remove at
console.log(removeAt([1,2,3,4,5],2));
function removeAt(arr,index){
    var valAt = arr[index - 1];
    for(var i = index - 1; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop(arr.length - 1);
    console.log(arr);
    return "Value at index " + index + " is " + valAt;
}
