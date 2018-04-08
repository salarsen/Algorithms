// remove blanks
var a = " Pl    ayTha    tF   u   nkyM    usi   c    ";
console.log(removeBlanks(a));
function removeBlanks(a){
    return a.split(" ").join("");
}
