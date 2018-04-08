// function fullDate(daynum){
//     var sum = 0;
//     for(var i = 1; i <= 12; i++){
//         sum += monthToDays(i);
//         if(sum >= daynum){
//             break;
//         }
//     }
//     sum -= monthToDays(i);
//     console.log(weekdayName2(daynum - sum) + ", " + dayToMonth(daynum) + " " + (daynum - sum) + ", 2017");
// }

// fullDate(142);

// function fullDate2(datenum){
//     var days = datenum % 365;
//     days -= 1;
//     var years = (datenum - (datenum % 365))/365;
//     var num_leap_days = (years - (years % 4))/4;
//     var sum = 0;
//     for(var i = 1; i <= 12; i++){
//         sum += monthToDays(i);
//         if(sum >= days){
//             break;
//         }
//     }
//     sum -= monthToDays(i);
//
//     // console.log(days);
//     // console.log(years);
//     // console.log(num_leap_days);
//     // console.log(dayToMonth(days - num_leap_days));
//     // console.log(days - num_leap_days - sum);
//     // console.log(2017 + years);
//     console.log(weekdayName2(days + num_leap_days - sum) + ", " + dayToMonth(days - num_leap_days) + " " + (days - num_leap_days - sum) + ", " + (2017 + years));
// }

// fullDate2(8475);

function fullDate3(datenum){
    // calculate years passed
    var years = (datenum - (datenum % 365))/365;

    //calculate number of leap years passed
    var numleapdays = 0;
    for(var i = 2017; i <= 2017+years; i++){
        if(leap_yr(i)){
            numleapdays++;
        }
    }

    //check if current year is leap, subtract one from leap days if so since we are working in current year
    if(leap_yr(2017+years)){
        numleapdays -= 1;
    }

    //adjust remaining days for leap years passed
    var days_remaining = (datenum - numleapdays) % 365;
    //calculate how far week is offset. Every year first day of the year shifts by a day, i.e. 2017, the first is a monday, 2017, the first is a tuesday, etc..
    var dayoffset = years % 7;

    //calculate total days passed non-inclusive of current month
    var days_passed = 0;
    for(var i = 1; i <= 12; i++){
        days_passed += monthToDays(i);
        if(days_passed >= days_remaining - 1){
            break;
        }
    }
    days_passed -= monthToDays(i); // remove current month to get days in current month passed
    //account for leap day if leap year and passed february
    if(leap_yr(2017+years) && i > 2){
        days_passed += 1;
    }

    console.log(weekdayName2((((days_remaining - days_passed) % 6) + dayoffset) % 7) + ", " + dayToMonth(days_remaining) + " " + (days_remaining - days_passed) + ", " + (2017+years));

}

fullDate3(139947);
fullDate3(139957);
fullDate3(139977);
fullDate3(139978);
fullDate3(139979);
