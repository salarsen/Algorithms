// star art
function drawLeftStars(num){
    var starstr = "";
    if(num > 75){
        return "Your string is bigger than 75 characters!";
    } else {
        for(var i = 0; i < num; i++){
            starstr += "*";
        }
        return starstr;
    }
}
console.log(drawLeftStars(60));
console.log(drawLeftStars(75));

function drawRightStars(num){
    var starstr = "";
    if(num > 75){
        return "Your string is bigger than 75 characters!";
    } else {
        for(var i = 0; i < 75; i++){
            if(i < 75 - num){
                starstr += " ";
            } else {
                starstr += "*";
            }
        }
        return starstr;
    }
}

console.log(drawRightStars(60));

function drawCenteredStars(num){
    var starstr = "";
    if(num > 75){
        return "Your string is bigger than 75 characters!";
    } else {
        for(var i = 0; i < 75; i++){
            if(i < (75 - num)/2){
                starstr += " ";
            } else if (i < ((75 - num)/2) + num){
                starstr += "*";
            } else {
                starstr += " ";
            }
        }
        return starstr;
    }
}

console.log(drawCenteredStars(60));
