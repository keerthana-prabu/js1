let b = "12";
let num = Number(b);

if (num % 2 === 0){
    console.log("Even");
} else {console.log ("Odd");}

console.log(b % 2 === 0);

let day = "4";
let d = Number(day);
//true means even, false means odd.

switch(d) {
    case 1: console.log("It's a weekday");
    break;
    case 2: console.log("It's a weekday");
    break;
    case 3: console.log("It's a weekday");
    break;
    case 4: console.log("It's a weekday");
    break;
    case 5: console.log("It's a weekday");
    break;
    case 6: console.log("It's the weekend");
    break;
    case 7: console.log("It's the weekend");
    break;
    default : console.log("Invalid day");
}