console.log(letterGrade(88));
console.log(letterGrade(61));
function letterGrade(score){
    if(score >= 90){
        return "Score: " + score + ". Grade: A";
    } else if(score >= 80){
        return "Score: " + score + ". Grade: B";
    } else if(score >= 70){
        return "Score: " + score + ". Grade: C";
    } else if(score >= 60){
        return "Score: " + score + ". Grade: D";
    } else{
        return "Score: " + score + ". Grade: F";
    }
}
