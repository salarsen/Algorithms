console.log(swapCenter([true,42,"Ada",2,"pizza"]));
console.log(swapCenter([1,2,3,4,5,6]));
function swapCenter(arr){
    var temp = 0;
    for(var i = 0; i < arr.length/2; i++){
        if(i%2 ===0){
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }
    return arr;
}
