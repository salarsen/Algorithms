// Zip it
//
// Create a standalone function that accepts two arrays and combines their values sequentially into the first array, at alternating indices starting with the first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], change first array to [1,10,2,20,30,40].
a = [1,2,3];
b = [10,20,30,40];
// zipIt_new(a,b);
zipIt(a,b);
console.log(a);
function zipIt_new(arr1, arr2){
    var delta = Math.abs(arr1.length - arr2.length);
    var index = 0;
    if (arr1.length > arr2.length){
        index = arr2.length;
    } else {
        index = arr1.length;
    }
    var new_arr = [];
    for(var i = 0; i < index; i++){
        new_arr.push(arr1[i]);
        new_arr.push(arr2[i]);
    }
    for(var i = index; i < index + delta; i++){
        if(arr1[i])
            new_arr.push(arr2[i]);
        else if (arr2[i])
            new_arr.push(arr2[i]);
    }
    console.log(new_arr);
}

//uses original array
function zipIt(arr1, arr2){
    arr1.length = arr1.length + arr2.length;
    //shift
    for(var i = arr1.length - arr2.length - 1; i > 0; i--){
        arr1[2 * i] = arr1[i];
        delete arr1[i];
    }
    var index = 0;
    for(var i = 1; i < arr1.length; i++){
        if(!arr1[i]){
            arr1[i] = arr2[index];
            index++;
        }
    }
}
