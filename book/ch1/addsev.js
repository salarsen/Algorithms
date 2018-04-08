console.log(addSev([1,2,3,4,5,6]));
function addSev(arr){
    var new_arr = [];
    for(var i = 1; i < arr.length; i++){
        new_arr.push(arr[i] + 7);
    }
    return new_arr;
}
