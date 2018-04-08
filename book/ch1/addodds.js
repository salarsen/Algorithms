addOdds(-300000,300000);
function addOdds(start,finish){
    var delta = start + finish;
    if (delta !== 0){
        for(var i = 0; i < delta; i++){
            if(i%2 !== 0)
                console.log(i);
        }
    } else {
        console.log("values cancel");
    }
}
