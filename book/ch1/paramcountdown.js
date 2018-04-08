paramcountdown(3,5,17,9);
function paramcountdown(param1, param2, param3, param4){
    while(param2 < param3  ){
        if(param2%param1 === 0 && param2 !== param4){
            console.log(param2);
        }
        param2++;
    }
}
