console.log(outlook([1,-3,5]));
function outlook(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = -1 * arr[i];
        }
    }
    return arr;
}
