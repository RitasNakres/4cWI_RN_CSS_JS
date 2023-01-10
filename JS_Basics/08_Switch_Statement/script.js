console.log("Hello");

// Erstelle eine Zufallszahl zwischen 5 und 10 
let min = 5;
let max = 10;
let randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber);

// Wenn der Wert 10 ist gib aus Ten 
// Wenn der Wert 9 ist gib aus Nine 
// Wenn der Wert 8 ist gib aus Eight 
// etc. 

switch (randomNumber) {
    case 0:
        if (randomNumber === 0) {
            console.log("Zero");
        }
        break;
    case 1:
        if (randomNumber === 1) {
            console.log("One");
        }
        break;
    case 2:
        if (randomNumber === 2) {
            console.log("Two");
        }
        break;
    case 3:
        if (randomNumber === 3) {
            console.log("Three");
        }
        break;
    case 4:
        if (randomNumber === 4) {
            console.log("Four");
        }
        break;
    case 5:
        if (randomNumber === 5) {
            console.log("Five");
        }
        break;
    case 6:
        if (randomNumber === 6) {
            console.log("Six");
        }
        break;
    case 7:
        if (randomNumber === 7) {
            console.log("Seven");
        }
        break;
    case 8:
        if (randomNumber === 8) {
            console.log("Eight");
        }
        break;
    case 9:
        if (randomNumber === 9) {
            console.log("Nine");
        }
        break;
    case 10:
        if (randomNumber === 10) {
            console.log("Ten");
        }
        break;
}

