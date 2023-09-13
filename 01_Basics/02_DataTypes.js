// JavaScript DataTypes :

"use strict"; //Treats All JS Code As Newer Version.

let accNumber = 112345112344; // Number Type

let accHolderName = 'John Wick';

let isAccActive = true;

console.table([accNumber, accHolderName, isAccActive])

/* 
Other DataTypes:
1. null - It is a special value that represents an empty or unknown value.
2. BigInt - An integer with arbitrary precision.
3. undefined - When the value of the variable is not defined.
4. symbol
5. Objects
*/

console.log(typeof accNumber)
console.log(typeof accHolderName)
console.log(typeof isAccActive)
console.log(typeof null)  // Type is "object".
console.log(typeof undefined) // Type is "undefined".
