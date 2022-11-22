console.log("Hello");
console.log("test");

// Schleife
for (let count = 10; count > 0; count--) {
    console.log(count + " " + "Serkan");
}

// Zähle von 7 bis 45 

for (let count = 7; count <= 45; count++) {
    console.log(count + " " + "Serkan");
}

// Zähle von 9 bis 99 

for (let count = 9; count <= 99; count++) {
    console.log(count + " " + "Serkan");
}

// Zähle rückwärts von 10 bis 0 

for (let count = 10; count >= 0; count--) {
    console.log(count + " " + "Serkan");
}

// Zähle rückwärts von 1234 bis 1207 

for (let count = 1234; count >= 1207; count--) {
    console.log(count + " " + "Serkan");
}

// Gib Deinen Namen genau 8 mal aus

for (let count = 0; count < 8; count++) {
    console.log("Serkan");
}

// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0

for (let count = 0; count <= 10; count++) {
    console.log(count);
    if(count==10) {
        console.log("Serkan");
    }
    if(count==10) {
        for (let count = 10; count >= 0; count--){
            console.log(count);
        }
    }
} 
