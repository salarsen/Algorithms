var a = 349;
var b = 2344;
var c = 1492;
console.log(a + " - " + romanize(a));
console.log(b + " - " + romanize(b));
console.log(c + " - " + romanize(c));
function romanize(num){
    var roman = [];
    if(num < 4000){
		roman.push(romanConv(num - (num % 1000)));
        roman.push(romanConv((num % 1000) - (num % 1000 % 100)));
		roman.push(romanConv((num % 1000 % 100) - (num % 1000 % 100 % 10)));
		roman.push(romanConv(num % 1000 % 100 % 10));
    }
    return roman.join("");
}

function romanConv(num){
    switch (num){
		case 3000: return 'MMM'; break;
		case 2000: return 'MM'; break;
        case 1000: return 'M'; break;
		case 900: return 'CM'; break;
		case 800: return 'DCCC'; break;
		case 700: return 'DCC'; break;
        case 600: return 'DC'; break;
        case 500: return 'D'; break;
		case 400: return 'CD'; break;
		case 300: return 'CCC'; break;
		case 200: return 'CC'; break;
        case 100: return 'C'; break;
		case 90: return 'XC'; break;
		case 80: return 'LXXX'; break;
		case 70: return 'LXX'; break;
		case 60: return 'LX'; break;
        case 50: return 'L'; break;
		case 40: return 'XL'; break;
		case 30: return 'XXX'; break;
		case 20: return 'XX'; break;
        case 10: return 'X'; break;
		case 9: return 'IX'; break;
		case 8: return 'VIII'; break;
		case 7: return 'VII'; break;
		case 6: return 'VI'; break;
        case 5: return 'V'; break;
		case 4: return 'IV'; break;
		case 3: return 'III'; break;
		case 2: return 'II'; break;
        case 1: return 'I'; break;
        default: return '';
    }
}
