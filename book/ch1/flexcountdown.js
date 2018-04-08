flexcountdown(2,9,3);
function flexcountdown(lownum, highnum, mult){
    while(highnum > lownum  ){
        console.log(highnum);
        highnum-=mult;
    }
}
