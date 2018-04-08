// messy math
function messyMath(num){
    var sum = 0;
    for(var i = 0; i <= num; i++){
        if(i % 3 === 0){
            continue;
        } else if (i % 7 === 0){
            sum = sum + i + i;
        } else{
            if (i/num === 1/3){
                return -1;
            } else {
                sum+= i;
            }
        }
    }
    return sum;
}

console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));
