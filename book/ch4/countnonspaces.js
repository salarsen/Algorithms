// count non-spaces
var a = "Honey pie, you are driving me crazy";
console.log(countNonSpaces(a));
function countNonSpaces(str){
    return str.split(" ").join("").split("").length;
}
