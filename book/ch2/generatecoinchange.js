// generate coin change
function generateCoinChange(cents){
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    var remainder = 0;
    quarters = (cents - (cents % 25))/25;
    dimes = ((cents % 25) - ((cents % 25) % 10))/10;;
    nickels = (((cents % 25) % 10) - (((cents % 25) % 10) % 5))/5;
    pennies = ((cents % 25) % 10) % 5;
    console.log(cents + " cents can be represented by:");
    console.log("quarters: " + quarters);
    console.log("dimes: " + dimes);
    console.log("nickels: " + nickels);
    console.log("pennies: " + pennies)
}
generateCoinChange(94);
