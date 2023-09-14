// JavaScript Type Conversion :

let scoreInNumber = 100;
let scoreInString = "100";

console.table([typeof scoreInNumber,typeof scoreInString]);

// Conversion To String :
let numberToString = String(scoreInNumber);

// Conversion To Number :
let stringToNumber = Number(scoreInString);

console.table([typeof numberToString,typeof stringToNumber]);

// Conversion To Boolean :
let isLoggedIn = 1;
let isActive = true;
let userName = "";
let address = "Los Angeles";

let toBooleanLoggedIn = Boolean(isLoggedIn);
let toNumberActive = Number(isActive);
let toBooleanName = Boolean(userName);
let toBooleanAddress = Boolean(address);

console.table([typeof toBooleanLoggedIn,typeof toNumberActive,typeof toBooleanName,typeof toBooleanAddress]);
console.table([toBooleanLoggedIn,toNumberActive,toBooleanName,toBooleanAddress]);



