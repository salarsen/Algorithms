console.log(thisThat(3,4));
console.log(thisThat(3,3));
function thisThat(num1, num2){
    var arr = [];
    if (num1 == num2){
        return "jinx!"
    } else {
        for(var i = 1; i <= num2; i++){
            arr.push(num2);
        }
        return arr;
    }
}
