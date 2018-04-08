//pop front
console.log("front: " + popFront([1,2,3,4,5]));
function popFront(arr){
    var front = arr[0];
    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop(arr.length - 1);
    console.log(arr);
    return front;
}
