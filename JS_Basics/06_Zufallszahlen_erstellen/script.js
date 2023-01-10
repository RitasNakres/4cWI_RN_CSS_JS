console.log("Hello");

// Wenn größer als 800, ausgeben: "Zahl ist größer als 800"
// Wenn zwischen 500 und 800: "Zahl ist zwischen 500 und 800"
// Wenn zwischen 200 und 500: "Zahl ist zwischen 200 und 500"
// Wenn zwischen 0 und 200: "Zahl ist zwischen 0 und 200"

let randomNumber = Math.floor(Math.random() * 1001);

if (randomNumber>800) {
    console.log("Die Zahl ist größer als 800: " + randomNumber);
} else if (randomNumber >= 500 && randomNumber <=800) {
    console.log("Die Zahl ist zwischen 500 und 800: " + randomNumber);
} else if (randomNumber >= 200 && randomNumber <= 500) {
    console.log("Die Zahl ist zwischen 200 und 500: " + randomNumber);
} else if (randomNumber >= 0 && randomNumber <= 200) {
    console.log("Die Zahl ist zwischen 0 und 200: " + randomNumber);
}
