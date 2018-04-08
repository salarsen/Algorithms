//remove negatives
console.log(removeNegs([2,-1,4,-2,5]));
function removeNegs(arr){
    var new_arr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
