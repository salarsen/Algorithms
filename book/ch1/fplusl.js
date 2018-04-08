console.log(fPlusL([1,2,3,4,5,6]));
console.log(fPlusL([true,2,3,4,5,6]));
console.log(fPlusL(["hello",2,3,4,5,6]));
function fPlusL(arr){
    return arr[0] + arr.length;
}
