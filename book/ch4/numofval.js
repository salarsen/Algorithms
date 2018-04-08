var object = { band : "Travis shred", style: "country", album: "667"};

console.log(numvalues(object));

function numvalues(obj){
    var num = 0;
    for (key in obj){
        num++;
    }
    return num;
}
