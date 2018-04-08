printEvenOdd([1,1,1,2,2,2,3,4,4,4]);
function printEvenOdd(arr){
    var countOdd = 0;
    var countEven = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 === 0){
            countEven++;
        } else {
            countOdd++;
        }
        if(countOdd == 3){
            console.log("That's odd!");
            countOdd = 0;
        } else if(countEven == 3){
            console.log("Even More So")
            countEven = 0;
        }
    }
}
