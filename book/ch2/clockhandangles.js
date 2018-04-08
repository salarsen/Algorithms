// clock hand angles
function clockHandAngles(seconds){
    // 60 seconds per minute
    // 60*60 seconds per hour
    // 24 hours per day or 12 hours on clock face
    // 7 days per week

    var secondHand = seconds % 60;
    var minutes = (seconds - secondHand)/60;
    var minuteHand = minutes % 60;
    var hours = (minutes - minuteHand)/60;
    var hourHand = hours % 12;
    var days = (hours - hourHand)/12;
    var leftoverDays = (days/2) % 7;
    var weeks = ((days/2) - leftoverDays)/7;
    console.log("Day hand: " + ((leftoverDays/7)*360 + (hourHand/12/7)*360 + (minuteHand/60/12/7)*360 + (secondHand/60/12/60/7)*360));
    console.log("Hour hand: " + ((hourHand / 12)*360 + ((minuteHand/60)/12)*360 + ((secondHand/60)/12/60*360)) + " degs");
    console.log("Minute hand: " + ((minuteHand/60)*360 + (secondHand/60/60)*360) + " degs");
    console.log("Second hand: " + ((secondHand/60)*360) + " degs");
}

clockHandAngles(3600);
clockHandAngles(119730);
clockHandAngles(604800 + 89400);
