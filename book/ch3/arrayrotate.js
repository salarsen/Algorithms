//array rotate
console.log(rotateArr([1,2,3],-2));
function rotateArr(arr,shiftBy){
    var shiftact = 0;
    if(shiftBy > 0){
        shiftact = shiftBy % arr.length;
    } else if (shiftBy < 0){
        shiftact = arr.length - (Math.abs(shiftBy) % arr.length);
    }
    console.log(shiftact);
    if(shiftact === 0){
        return arr;
    } else {
        var temp = 0;
        for(var i = 0; i < shiftact; i++){
            for(var x = arr.length - 1; x > 0; x--){
                if(x === arr.length - 1){
                    temp = arr[x];
                }
                arr[x] = arr[x-1];
            }
            arr[0] = temp;
        }
        return arr;
    }
}
