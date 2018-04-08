// remove even length strings
var a = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];
console.log(removeEven(a));
function removeEven(arr){
    var new_arr = [];
    for (var i = 0; i < arr.length; i++){
        if(arr[i].length % 2 == 0){
            console.log("Removing \"" + arr[i] + "\" from array of length " + arr.length);
            console.log("before: " + arr);
            for(var x = i; x < arr.length - 1; x++){
                arr[x] = arr[x+1];
            }
            arr.pop();
            i--; //reset i so we can check the value that is now at i before we started the shift
            console.log(divider("-",40));
        }
    }
    return arr;
}

function divider(div_char, count){
    var div_str = [];
    for (var i = 0; i < count; i++){
        div_str.push(div_char);
    }
    return div_str.join("");
}   
