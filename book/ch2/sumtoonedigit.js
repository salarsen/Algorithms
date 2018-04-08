// sum to one digit
function sumToOne(num){
    var thousandth = (num - (num % 1000))/1000;
    var hundreds = ((num % 1000) - ((num % 1000) % 100))/100;
    var tens = (((num % 1000) % 100) - (((num % 1000) % 100) % 10))/10;
    var single = ((num % 1000) % 100) % 10;
    var sum = thousandth + hundreds + tens + single;
    while(sum > 9){
        sum = thousandth + hundreds + tens + single;
        thousandth = (sum - (sum % 1000))/1000;
        hundreds = ((sum % 1000) - ((sum % 1000) % 100))/100;
        tens = (((sum % 1000) % 100) - (((sum % 1000) % 100) % 10))/10;
        single = ((sum % 1000) % 100) % 10;
    }
    return sum;
}

console.log(sumToOne(928));
