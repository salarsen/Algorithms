var change = 69;

console.log(coinchange(change));
console.log(coinchange(78));
function coinchange(change){
    var coins = { quarters : 0, dimes : 0, nickels : 0, pennies : 0 };
    coins.quarters = (change - (change % 25)) / 25;
    coins.dimes = ((change % 25) - (change % 25 % 10))/10;
    coins.nickels = ((change % 25 % 10) - (change % 25 % 10 % 5))/5;
    coins.pennies = change % 25 % 10 % 5;
    return coins;
}
