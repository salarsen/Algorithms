var search_arr = [25, 10, 20, 15, 5];

console.log(findvalues(search_arr));

function findvalues(arr){
    var val_obj = {max : 0, min : null, avg : 0};
    for(var i = 0; i < arr.length; i++){
        if(search_arr[i] > val_obj.max){
            val_obj.max = search_arr[i];
        } else if (search_arr[i] < val_obj.min){
            val_obj.min = search_arr[i];
        } else if (val_obj.min == null){
            val_obj.min = search_arr[i];
        }
        val_obj.avg += search_arr[i];
    }
    val_obj.avg = val_obj.avg / search_arr.length;
    return val_obj;
}
