// Shuffle
//
// Recreate the shuffle(arr) function built into JavaScript, to efficiently shuffle a given array’s values. Work in-place, of course. Do you need to return anything from your function?
a = [20,30,40,50,60,70];
console.log(a);
shuffleArr(a);
console.log(a);
function shuffleArr(arr){
    var newpos = 0;
    var temp = 0;
    for(var i = 0; i < arr.length; i++){
        newpos = Math.trunc(Math.random()*(arr.length - 1));
        temp = arr[i];
        arr[i] = arr[newpos];
        arr[newpos] = temp;
    }
}
