// characterArt
function drawLeftChars(num, char){
    var starstr = "";
    if(num > 75){
        return "Your string is bigger than 75 characters!";
    } else {
        for(var i = 0; i < num; i++){
            starstr += char;
        }
        return starstr;
    }
}
console.log(drawLeftChars(60,"t"));
console.log(drawLeftChars(50,"x"));

function drawRightChars(num,char){
    var starstr = "";
    if(num > 75){
        return "Your string is bigger than 75 characters!";
    } else {
        for(var i = 0; i < 75; i++){
            if(i < 75 - num){
                starstr += " ";
            } else {
                starstr += char;
            }
        }
        return starstr;
    }
}

console.log(drawRightChars(60,"x"));

function drawCenteredChars(num,char){
    var starstr = "";
    if(num > 75){
        return "Your string is bigger than 75 characters!";
    } else {
        for(var i = 0; i < 75; i++){
            if(i < (75 - num)/2){
                starstr += " ";
            } else if (i < ((75 - num)/2) + num){
                starstr += char;
            } else {
                starstr += " ";
            }
        }
        return starstr;
    }
}
console.log(drawCenteredChars(75,"t"));
console.log(drawCenteredChars(50,"t"));
