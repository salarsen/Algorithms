// threes and fives
function threesAndFives(){
    var sum = 0;
    for(var i = 100; i <= 4000000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(threesAndFives());

// threes and fives
function betterThreesFives(start,end){
    var sum = 0;
    for(var i = start; i <= end; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(betterThreesFives(3,15));
