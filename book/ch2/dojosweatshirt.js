// dojo sweatshirt
function sweatShirtPricing(num){
    var pieceprice = 20;
    if (num == 1){
        return pieceprice;
    } else if (num == 2){
        return Math.ceil(num*pieceprice*(1-.09));
    } else if (num == 3){
        return Math.ceil(num*pieceprice*(1-.19));
    } else if (num >= 4){
        return Math.ceil(num*pieceprice*(1-.35));
    }
}
console.log(sweatShirtPricing(1));
console.log(sweatShirtPricing(2));
console.log(sweatShirtPricing(3));
console.log(sweatShirtPricing(4));
