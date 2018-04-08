//skyline heights
console.log(skylineHeights([1,-1,7,3]));
function skylineHeights(arr){
    var new_arr = [];
    var prev = arr[0];
    new_arr.push(prev); //we assume we will always see the first building
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > prev){
            prev = arr[i];
            new_arr.push(prev);
        }
    }
    return new_arr;
}
