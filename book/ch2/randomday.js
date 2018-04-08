function randomDay(){
    return Math.trunc(Math.random()*365) + 1;
}

function someDays(){
    var day = randomDay();
    for(var i = 0; i < 17; i++){
        day = randomDay();
        weekdayName2(day);
        if(day % 7 === 0 || day % 7 === 6){
            console.log("Enjoy your day off!");
        } else {
            console.log("Work hard!");
        }
    }
}

someDays();
