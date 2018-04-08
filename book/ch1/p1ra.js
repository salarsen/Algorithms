console.log(p1rA([1,2,3,4,5,6]));
function p1rA(arr){
    console.log(arr.length-1);
    for(var i = 0; i < arr.length; i++){
        if(i%2 !== 0){
            break;
        }
    }
    return i;
}
