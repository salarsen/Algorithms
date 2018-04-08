console.log(soaringIQ(101));
function soaringIQ(iq){
    for(var i = 1; i <= 98; i++){
        //console.log(iq + " * " + (1 + i/100));
        iq = iq * (1 + i/100);
    }
    return iq;
}
