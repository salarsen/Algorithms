//array filter range (does not maintain order)
console.log(filterRange([1,2,3,4,5],2,4));
console.log(filterRange([2,5,3,1,0,6,3,8,4,9],2,4));
function filterRange(arr,min,max){
    var index = 0;
    while(index < arr.length){
        if(arr[index] < min || arr[index] > max){
            arr[index] = arr[arr.length - 1];
            arr.pop();
        } else {
            index++;
        }
        console.log(arr);
    }
    return arr;
}
