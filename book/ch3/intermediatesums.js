// Intermediate Sums

// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

a = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
intermedSums(a);
function intermedSums(arr){
    var sum = 0;
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        if((i + 1) % 10 === 0){
            //add last value
            sum += arr[i];
            arr.length = arr.length + 1;
            //shift remaining if not at end of array
            for(var x = arr.length - 1; x > i + 1; x--){
                 arr[x] = arr[x - 1];
            }
            //set new value in list
            arr[i+1] = sum;
            sum = 0;
            i++;
        } else {
            sum += arr[i];
        }
    }
    if((i + 1) % 10 !== 0){
        arr.length = arr.length + 1;
        arr[i] = sum;
    }
    console.log(arr);
}
