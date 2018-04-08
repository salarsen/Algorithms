// second largest
console.log(secondLargest([42,4,1,Math.PI,7]));
function secondLargest(arr){
    //find largest first
    var largest = 0;
    var secondlargest = 0;
    if(arr.length < 2){
        return null;
    } else{
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > largest && arr[i] > secondlargest){
                secondlargest = largest;
                largest = arr[i];
            }else if(arr[i] < largest && secondlargest < arr[i]){
                secondlargest = arr[i];
            }
        }
        return secondlargest;
    }
}
