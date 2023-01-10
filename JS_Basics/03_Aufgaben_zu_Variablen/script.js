console.log("hello");

let banana = "Banane"
let apple = "Apple"

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananaAverageWeight = 0.22;
let appleAverageWeigt = 0.34;

// Preis von 8 Äpfeln 

let amountOfApplesPerKilo = ((applePricePerKilo / appleAverageWeigt))
console.log(amountOfApplesPerKilo);

let pricePerApple = applePricePerKilo / amountOfApplesPerKilo;
console.log(pricePerApple);

let priceOfEightApples = pricePerApple * 8;
console.log("The price for eight apples is: " + priceOfEightApples)


// Preis von 17 Bananen 

let amountOfBananasPerKilo = ((bananaPricePerKilo / bananaAverageWeight))
console.log(amountOfBananasPerKilo);

let pricePerBanana = bananaPricePerKilo / amountOfBananasPerKilo;
console.log(pricePerBanana);

let priceOfSeventeenBananas = pricePerBanana * 17;
console.log("The price for seventeen bananas is: " + priceOfSeventeenBananas);

// Preis von 1 Tonne Äpfel 

let priceOfOneTonOfApples = applePricePerKilo * 1000;
console.log("The price for one ton of apples is: " + "€" + " "  + priceOfOneTonOfApples + ",-");

// Preis von 1 Tonne Bananen 

let priceOfOneTonOfBananas = bananaPricePerKilo * 1000;
console.log("The price for one ton of bananas is: " + "€" + " " + priceOfOneTonOfBananas + ",-");