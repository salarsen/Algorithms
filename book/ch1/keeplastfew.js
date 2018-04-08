console.log(keepLastFew([2,4,6,8,10],3));
function keepLastFew(arr,x){
    console.log("[" + arr + "] " + x);
    for(var i = 0; i < x; i++){
        arr[i] = arr[arr.length - x + i];
    }
    arr.length = x;
    return arr;
}
