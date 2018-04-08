// array remove duplicates
console.log(removeDup([1,2,2,3,4,5,5,6]));
function removeDup(arr){
    var new_arr = [];
    for(var i = 0; i < arr.length; i++){ //go to 2nd to last element in array so we don't get an undefined on last
        if(arr[i] !== arr[i+1]){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
