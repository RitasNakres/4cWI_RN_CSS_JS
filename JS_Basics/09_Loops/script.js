console.log("hello");

for (let row = 0; row <= 3; row++) {
    let loopText = "";
    for (let col = 0; col <= 3; col++) {
        if (row % 2==0) {
            loopText += "O";
        } else {
            loopText += "X";
        }
    }
    console.log(loopText);
}


let loopSum = 0;
for (let count = 0; count <= 99; count+=2) {
loopSum += count;
}
console.log(loopSum);