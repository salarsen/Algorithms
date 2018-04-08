//nth to last
console.log(nthToLast([5,2,3,6,4,9,7],3));
function nthToLast(arr,index){
    if (arr.length < index){
        return null;
    } else {
        return arr[arr.length - index];
    }
}
