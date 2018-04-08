// swap array pairs
console.log(swapPairs([1,2,3,4]));
function swapPairs(arr){
    var tempVal = 0;
    var index = 0;
    if(arr.length % 2 === 0)
        index = arr.length;
    else
        index = arr.length - 1;
    for(var i = 0; i < index-1; i+=2){
        tempVal = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = tempVal;
    }
    return arr;
}
