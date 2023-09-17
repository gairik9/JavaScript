// JavaScript Strings :

let name = "John Wick";

let overview = "John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick, a former hitman who is drawn back into the criminal underworld he had previously abandoned."

// String Concatenation :
// Process One :

console.log("Movie Name : "+name+"\n"+"Overview : "+overview);

// Process Two :
console.log(`Name : ${name}\nOverview : ${overview}`)

// Accessing Index Values :
console.log(name[2])

// Other Common String Methods :

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(name.charAt(5));