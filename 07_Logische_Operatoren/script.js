console.log("hello");

 // Erstelle zwei Zufallszahl zwischen 0 und 100 

 let randomNumberOne = Math.floor(Math.random() * 101);
 let randomNumberTwo = Math.floor(Math.random() * 101);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 

 if (randomNumberOne < randomNumberTwo && randomNumberOne < 50) {
    console.log("Zahl 1: " + randomNumberOne + " ist kleiner als Zahl 2: " + randomNumberTwo + " und Mini");
 }

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 

if (randomNumberOne < 30 || randomNumberTwo < 30) {
    console.log("Eine der beiden ist kleiner als 30: " + " Zahl1: " + randomNumberOne + " " + "Zahl2: " + randomNumberTwo);
 }

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 

if (randomNumberOne < 50 && randomNumberTwo != 50) {
    console.log("Erste Zahl kleiner als 50: " + " Zahl1: " + randomNumberOne + " zweite kein 50iger: " + " Zahl2: " + randomNumberTwo);
 }