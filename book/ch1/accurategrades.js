console.log(accurateGrades(88));
console.log(accurateGrades(61));
function accurateGrades(score){
    if(score >= 90){
        if(score >= 95){
            return "Score: " + score + ". Grade: A";
        } else{
            return "Score: " + score + ". Grade: A-";
        }
    }else if(score >= 80){
        if(score >= 88){
            return "Score: " + score + ". Grade: B+";
        } else if(score <= 82){
            return "Score: " + score + ". Grade: B-";
        } else{
            return "Score: " + score + ". Grade: B";
        }
    }else if(score >= 70){
        if(score >= 78){
            return "Score: " + score + ". Grade: C+";
        } else if(score <= 72){
            return "Score: " + score + ". Grade: C-";
        } else{
            return "Score: " + score + ". Grade: C";
        }
    }else if(score >= 60){
        if(score >= 68){
            return "Score: " + score + ". Grade: D+";
        } else if(score <= 62){
            return "Score: " + score + ". Grade: D-";
        } else{
            return "Score: " + score + ". Grade: D";
        }
    } else {
        return "Score: " + score + ". Grade: F";
    }
}
