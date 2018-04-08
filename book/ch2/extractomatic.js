// extract-o-matic
function extractDigit(num, digitNum){
    num = Math.abs(num);
    if(digitNum === 0){
        console.log(Math.floor(num % 10));
    } else if (digitNum === 1){
        console.log(Math.floor((num % 100) / 10));
    } else if (digitNum === 2){
        console.log(Math.floor((num / 100) % 10));
    } else if (digitNum === 3){
        console.log(Math.floor(num / 1000));
    } else if (digitNum === -1){
        console.log(Math.floor(((num % 1)*100) % 100 / 10));
    } else if (digitNum === -2){
        console.log(Math.floor(((num % 1)*100) % 10));
    }
}

extractDigit(1824,0);
extractDigit(1824,1);
extractDigit(1824,2);
extractDigit(1824,3);
extractDigit(123.45,-1);
extractDigit(123.45,-2);
extractDigit(-1824,3);
