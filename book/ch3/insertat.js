// insert at
// index is spot in array you wanted insert at, i.e. if we want index before 2 and after 1, we would set it to 2
console.log(insertAt([1,2,3,4,5],2,7));
function insertAt(arr,index,val){
    for(var i = arr.length -1; i >= index - 1; i--){
        arr[i + 1] = arr[i];
    }
    arr[index-1] = val;
    return arr;
}
