// most significant digit
function sigFig(num){
    //console.log(num);
    num = Math.abs(num);
    while(num > 9 || num < 1){
        if (num >= 10){
            num = Math.floor(num / 10);
        } else if (num < 1) {
            num = num * 10;
        } else {
            num = Math.floor(num % 10);
        }
    }
    console.log(num);
}

sigFig(12345);
sigFig(67.89);
sigFig(0.00987);
sigFig(-12345);
sigFig(-67.89);
sigFig(-0.00987);
