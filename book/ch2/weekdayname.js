// date, on a deserted island
// 1)
function weekdayName(weekdayNum){
    switch (weekdayNum){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Evidently this isn't a day");
            break;
    }
}

weekdayName(1);
weekdayName(2);
weekdayName(3);
weekdayName(8);

function weekdayName2(weekdayNum){
    switch (weekdayNum % 7){
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            return "Evidently this isn't a day";
            break;
    }
}

weekdayName2(1);
weekdayName2(2);
weekdayName2(3);
weekdayName2(8);
weekdayName2(88);
