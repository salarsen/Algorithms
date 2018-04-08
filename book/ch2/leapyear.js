console.log(leap_yr(2400));
function leap_yr(year){
    if((year%4 === 0 && year%100 !== 0) || year%400 === 0)
        return true;
    else {
        return false;
    }
}
