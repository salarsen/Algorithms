// Double Trouble
//
// Create a function that changes a given array to list each existing element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
a = [4,"Ulysses",42,false];
doubleTrouble(a);
function doubleTrouble(arr){
    arr.length = arr.length * 2;
    console.log(arr.length);
    for(var i = (arr.length/2) - 1; i >= 0; i--){
        //shift value
        arr[i*2] = arr[i];
        //duplicate value
        arr[(i*2) + 1] = arr[i];
    }
    console.log(arr);
}
