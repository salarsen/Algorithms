var a = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
var b = "D(i{a}l[ t]o)n{e";
var c = "A(1)s[O (n]o{t) o}k";

console.log(bracesValid(a));
console.log(bracesValid(b));
console.log(bracesValid(c));
// function bracesValid(str){
//     var arr = str.split("");
//     var paren_cnt = 0;
//     var squiggle_cnt = 0;
//     var bracket_cnt = 0;
//     var prev = [];
//     for(var i = 0; i < arr.length;i++){
//         if(arr[i] == "(" && paren_cnt >= 0){
//             paren_cnt++;
//             prev.push(arr[i]);
//         } else if (arr[i] == ")" && prev[prev.length - 1] == "("){
//             paren_cnt--;
//             prev.pop();
//         }
//         if (arr[i] == "{" && squiggle_cnt >= 0){
//             squiggle_cnt++;
//             prev.push(arr[i]);
//         } else if (arr[i] == "}" && prev[prev.length - 1] == "{"){
//             squiggle_cnt--;
//             prev.pop();
//         }
//         if (arr[i] == "[" && bracket_cnt >= 0){
//             bracket_cnt++;
//             prev.push(arr[i]);
//         } else if(arr[i] == "]" && prev[prev.length - 1]){
//             bracket_cnt--;
//             prev.pop();
//         }
//         // console.log(arr[i] + ": " + paren_cnt + " - " + squiggle_cnt + " - " + bracket_cnt);
//     }
//     if(paren_cnt == 0 && squiggle_cnt == 0 && bracket_cnt == 0){
//         return true;
//     } else {
//         return false;
//     }
// }

function bracesValid(str){
    var arr = str.split("");
    var prev = [];
    for(var i = 0; i < arr.length;i++){
        if(arr[i] == "(" || arr[i] == "{" || arr[i] == "["){
            prev.push(arr[i]);
        } else {
            if (arr[i] == ")" && prev[prev.length - 1] == "("){
                prev.pop();
            } else if (arr[i] == "}" && prev[prev.length - 1] == "{"){
                prev.pop();
            } else if (arr[i] == "]" && prev[prev.length - 1] == "["){
                prev.pop();
            }
        }
    }
    if (prev.length == 0){
        return true;
    } else {
        return false;
    }
}
