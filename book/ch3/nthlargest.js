// nth largest
console.log(nthLargest([4,42,1,Math.PI,7],3));
function nthLargest(arr,nth){
    var nthvalue = 0;
    var largearr = [];

    while(largearr.length != nth){
        nthvalue = 0;
        for(var i = 0; i < arr.length; i++){
            if (arr[i] > nthvalue && largearr.length === 0){ //set largest value
                nthvalue = arr[i];
            } else if (arr[i] > nthvalue && arr[i] < largearr[largearr.length - 1]){
                nthvalue = arr[i];
            }
        }
        largearr.push(nthvalue);
    }
    return nthvalue;
}
