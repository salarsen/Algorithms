//credit card validation
console.log(isCreditCardValid([5,2,2,8,2]));
function isCreditCardValid(arr){
    var last_dig = arr[arr.length - 1];
    var product = 0;
    var sum = 0;
    for(var i = arr.length - 2; i >= 0; i--){
        if( i % 2 !== 0){
            arr[i] = arr[i] * 2;
            if(arr[i] > 9)
                arr[i] -= 9;
        }
        sum += arr[i];
    }
    sum = last_dig + sum;
    if ( sum % 10 === 0){
        return true;
    } else {
        return false;
    }
}
