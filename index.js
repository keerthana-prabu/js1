let a = "65";

let mark = Number(a);

let Grade;

switch(true) {
    case (mark<=100 && mark >= 90):
    Grade = "A";
    break;
    case (mark>=75 && mark <=89):
        Grade = "B";
    break;
    case (mark >=50 && mark <= 74):
            Grade = "C";
    break;
    case (mark < 50):
        Grade = "Fail";
    break;
}

console.log(Grade);