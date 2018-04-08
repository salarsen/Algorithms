// gaming fundamentals
function rollOne(){
    return Math.trunc(Math.random()*6) + 1;
}

function playFives(num){
    var roll = 0;
    for(var i = 0; i < num; i++){
        roll = rollOne();
        console.log(roll);
        if(roll === 5){
            console.log("That's good luck!");
        }
    }
}

playFives(5);

function playStatistics(){
    var min = 6;
    var max = 0;
    var roll = 0;
    for(var i = 0; i < 8; i++){
        roll = rollOne();
        if(roll > max){
            max = roll;
        } else if(roll < min){
            min = roll;
        }
    }
    console.log("Min: " + min);
    console.log("Max: " + max);
}

playStatistics();

function playStatistics2(){
    var min = 6;
    var max = 0;
    var roll = 0;
    var sum = 0;
    for(var i = 0; i < 8; i++){
        roll = rollOne();
        if(roll > max){
            max = roll;
        } else if(roll < min){
            min = roll;
        }
        sum+= roll;
    }
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Sum: " + sum);
}

playStatistics2();

function playStatistics3(num){
    var min = 6;
    var max = 0;
    var roll = 0;
    var sum = 0;
    for(var i = 0; i < num; i++){
        roll = rollOne();
        if(roll > max){
            max = roll;
        } else if(roll < min){
            min = roll;
        }
        sum+= roll;
    }
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Sum: " + sum);
}

playStatistics3(10);

function playStatistics4(num){
    var min = 6;
    var max = 0;
    var roll = 0;
    var sum = 0;
    for(var i = 0; i < num; i++){
        roll = rollOne();
        if(roll > max){
            max = roll;
        } else if(roll < min){
            min = roll;
        }
        sum+= roll;
    }
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Avg: " + Math.ceil((sum/num)));
}

playStatistics4(10);
