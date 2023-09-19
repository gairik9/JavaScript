// JavaScript Dates :

let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString());
// console.log(date.toISOString());
console.log(date.toLocaleString());
// console.log(date.toJSON());

// Get year, month, and day part from the date :
let year = date.toLocaleString("default", { year: "numeric" });
let month = date.toLocaleString("default", { month: "short" });
let day = date.toLocaleString("default", { day: "2-digit" });

// Generate custom date string :
let formattedDate = [day, month, year].join("-");
console.log(formattedDate)



