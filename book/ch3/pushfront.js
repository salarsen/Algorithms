//push front
console.log(pushFront([1,2,3,4,5],0));
function pushFront(arr,newVal){
    for(var i = arr.length - 1; i >= 0; i--){
        arr[i + 1] = arr[i];
    }
    arr[0] = newVal;
    return arr;
};
