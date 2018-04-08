fitFirst([4,3,2]);
fitFirst([2,3,4]);
fitFirst([4,1,2,3]);
function fitFirst(arr){
    if(arr[0] > arr.length){
        console.log("too big!");
    } else if (arr[0] < arr.length){
        console.log("too small!");
    } else{
        console.log("just right!")
    }
}
