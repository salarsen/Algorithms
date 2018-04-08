function leap_yr(year){
    if((year%4 === 0 && year%100 !== 0) || year%400 === 0)
        return true;
    else {
        return false;
    }
}

function monthName(monthNum){
    monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return monthArr[monthNum - 1];
}

function weekdayName2(weekdayNum){
    switch (weekdayNum % 7){
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 0:
            return "Saturday";
            break;
        default:
            return "Evidently this isn't a day";
            break;
    }
}

function monthToDays(monthNum, leapyear){
    switch (monthNum){
        case 1:
            return 31;
            break;
        case 2:
            if(leapyear){
                return 29;
            } else {
                return 28;
            }
            break;
        case 3:
            return 31;
            break;
        case 4:
            return 30;
            break;
        case 5:
            return 31;
            break;
        case 6:
            return 30;
            break;
        case 7:
            return 31;
            break;
        case 8:
            return 31;
            break;
        case 9:
            return 30;
            break;
        case 10:
            return 31;
            break;
        case 11:
            return 30;
            break;
        case 12:
            return 31;
            break;
    }
}

function dayToMonth(daynum, leapyear){
    var sum = 0;
    var next_month = 0;
    for(var i = 1; i <= 12; i++){
        next_month = monthToDays(i,leapyear);
        if(sum + next_month < daynum){
            sum+= next_month;
        } else {
            break;
        }
    }
    return [monthName(i),sum];
}

function countLeapYears(start,finish){
    var num_leap_years = 0;
    for(var i = start; i < finish;i++){
        if(leap_yr(i)){
            num_leap_years++;
        }
    }
    return num_leap_years;
}

function fullDate3(dateNum){
    var years_passed = (dateNum - (dateNum % 365))/365;
    var leapdays_passed = countLeapYears(2017,2017+years_passed); // does not include current year
    var dayoffset = (Math.trunc(dateNum / 365)) % 7;
    var days_remaining = (dateNum % 365) - leapdays_passed;
    var leap_year = leap_yr(2017 + years_passed);
    var monthinfo = dayToMonth(days_remaining,leap_year);
    console.log(dayoffset);
    console.log(monthinfo[0] + monthinfo[1]);
    console.log(weekdayName2(days_remaining - monthinfo[1] - dayoffset));
}
fullDate3(139947);
fullDate3(139955);
fullDate3(367*7);
