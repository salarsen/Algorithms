console.log(dblVis([1,2,3,4]));
function dblVis(arr){
    var new_arr = [];
    for(var i = 0; i < arr.length; i++){
        new_arr.push(arr[i] * 2);
    }
    return new_arr;
}
