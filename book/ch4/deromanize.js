// 349 - CCCXLIX
// 2344 - MMCCCXLIV
var a = "CCCXLIX";
var b = "MMCCCXLIV";
var c = "DCIX";
var d = "MCDXCII";
console.log(deromanize(a));
console.log(deromanize(b));
console.log(deromanize(c));
console.log(deromanize(d));
function deromanize(str){
    key = ['DCCC','LXXX','VIII','MMM','DCC','CCC','LXX','XXX','VII','III','MM','CD','CM','DC','XC','LX','XL','XX','IX','VI','IV','II','CC','M','D','C','L','X','V','I'];
    var total = 0;
    for (var i = 0; i < key.length; i++){
        // var pattern = new RegExp(key[i]);
        for(var x = 0; x < key.length; x++){
            if (str == key[x]){
                total += romanConv(key[i]);
                str = str.replace(key[i],"");
            }
        }
        // if(pattern.test(str)){
        //     total += romanConv(key[i]);
        //     str = str.replace(pattern,"");
        // }
    }
    return total;
}

function romanConv(num){
    switch (num){
		case 'MMM': return 3000; break;
		case 'MM': return 2000; break;
        case 'M': return 1000; break;
		case 'CM': return 900; break;
		case 'DCCC': return 800; break;
		case 'DCC': return 700; break;
        case 'DC': return 600; break;
        case 'D': return 500; break;
		case 'CD': return 400; break;
		case 'CCC': return 300; break;
		case 'CC': return 200; break;
        case 'C': return 100; break;
		case 'XC': return 90; break;
		case 'LXXX': return 80; break;
		case 'LXX': return 70; break;
		case 'LX': return 60; break;
        case 'L': return 50; break;
		case 'XL': return 40; break;
		case 'XXX': return 30; break;
		case 'XX': return 20; break;
        case 'X': return 10; break;
		case 'IX': return 9; break;
		case 'VIII': return 8; break;
		case 'VII': return 7; break;
		case 'VI': return 6; break;
        case 'V': return 5; break;
		case 'IV': return 4; break;
		case 'III': return 3; break;
		case 'II': return 2; break;
        case 'I': return 1; break;
        default: return 0;
    }
}
