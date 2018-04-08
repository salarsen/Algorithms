hungry(["food","food","hello","food"]);
hungry(["hello","good","bye"]);
function hungry(arr){
    var found = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            found = true;
        }
    }
    if(!found)
        console.log("I'm hungry");
}
