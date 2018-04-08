// Remove array
//
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
a = [20,30,40,50,60,70];
removeArray(a,2,4);
console.log(a);
function removeArray(arr,start,stop){
    console.log("Remove values from " + arr[start] + " to " + arr[stop]);
    while(start - 1 != stop){
        //shift values left
        for(var i = start; i < arr.length - 1; i++){
            arr[i] = arr[i + 1];
        }
        arr.pop();
        stop--;
    }
    //console.log(arr);
}
