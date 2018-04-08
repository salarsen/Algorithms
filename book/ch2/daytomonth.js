function dayToMonth(daynum){
    var sum = 0;
    for(var i = 1; i <= 12; i++){
        sum += monthToDays(i);
        if(sum >= daynum - 1){
            break;
        }
    }
    return monthName(i);
}

console.log(dayToMonth(75));
console.log(dayToMonth(120));
console.log(dayToMonth(360));
