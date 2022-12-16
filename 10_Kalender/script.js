console.log("Hello");

let month = "February"
let startDay = 3;
let numDays;

switch (month) {
    case "January":
        numDays = 31;
        break;
    case "February":
        numDays = 28;
        break;
    case "March":
        numDays = 31;
        break;
    case "April":
        numDays = 30;
        break;
    case "May":
        numDays = 31;
        break;
    case "June":
        numDays = 30;
        break;
    case "July":
        numDays = 31;
        break;
    case "August":
        numDays = 31;
        break;
    case "September":
        numDays = 30;
        break;
    case "October":
        numDays = 31;
        break;
    case "November":
        numDays = 30;
        break;
    case "December":
        numDays = 31;
        break;
}

let calenderDays = ("| Mo | Di | Mi | Do | Fr | Sa | So |")
console.log(calenderDays);

let loopThroughDays
if (month = "February") {
    let result = ""
    for (let loopThroughDays = startDay; loopThroughDays <= numDays; loopThroughDays++) {
        result += "|  " + loopThroughDays;
    }
    console.log(result);
}






