// is prime
function isPrime(num){
    if(num % num === 0 && num % 1 === 0 && num % 2 !== 0){
        return true;
    } else {
        return false;
    }
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
