// acronyms
var a = " there's no free lunch - gotta pay yer way.";
var b = "Live from new york, it's saturday night!";
console.log(acronyms(a));
console.log(acronyms(b));
function acronyms(str){
    var wordArray = str.split(" ");
    var acronym_str = [];
    for (i = 0; i < wordArray.length; i++){
        var individual_word = wordArray[i].split("");
        acronym_str.push(individual_word[0]);
    }
    return acronym_str.join("").toUpperCase();
}
