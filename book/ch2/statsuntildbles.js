
// statistics until doubles
function rollD20(){
    return Math.trunc(Math.random()*20)+1;
}

function statsUntilDbles(){
    var num_rolls = 0;
    var max = 0;
    var sum = 0;
    var prev = 0;
    var roll = rollD20();
    var min = roll;
    while(prev !== roll){
        if(roll > max){
            max = roll;
        } else if(roll < min){
            min = roll;
        }
        sum+= roll;
        prev = roll;
        num_rolls++;
        roll = rollD20();
        console.log(prev + " - " + roll);
    }
    console.log("Number of rolls: " + num_rolls);
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Avg: " + Math.floor(sum/num_rolls));
}

statsUntilDbles();
