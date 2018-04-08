//array min to front
console.log(minToFront([4,3,1,5,6]));
function minToFront(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            arr[0] = arr[i];
            arr[i] = min;
            min = arr[0];
        }
    }
    return arr;
}
