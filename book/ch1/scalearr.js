console.log(scaleArr([1,2,3,4,5],3));
function scaleArr(arr,multi){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * multi;
    }
    return arr;
}
