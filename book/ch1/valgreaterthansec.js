valGreaterThanSec([1,3,5,7,9,13]);
function valGreaterThanSec(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            count++;
        }
    }
}
