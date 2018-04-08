// // Array concat
console.log(arrayConcat(['a','b'],[1,2]));
function arrayConcat(arr1, arr2){
    var new_arr = [];
    for(var i = 0; i < arr1.length; i++){
        new_arr.push(arr1[i]);
    }
    for(var i = 0; i < arr2.length; i++){
        new_arr.push(arr2[i]);
    }
    return new_arr;
}
