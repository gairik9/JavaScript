// JavaScript DataTypes :

/* -------------------------------------------------------------------------
DataTypes:
1. Null - It is a special type that represents an empty or unknown value.

2. BigInt - An integer with arbitrary precision (Can be used to strore large integers, even beyond safe integer limit.[Safe Ineteger Limit is 2(53)-1, here 53 is the power.]).

3. Undefined - When the value of the variable is not defined.

4. Symbol -

5. Objects - Covered In A Different File.

6. Strings - Covered In A Different File.

7. Numbers - Simple Integers or Floating Point Integers.
------------------------------------------------------------------------- */

"use strict"; //Treats All JS Code As Newer Version.

let accNumber = 112345112344; // Number Type.

let accHolderName = 'John Wick'; // String Type.

let isAccActive = true; // Boolean Type.

let largeNumber = 9999999999n; //Assign 'n' after a number to create a BigInt integer. 

let emptyVariable; // Undefined.

let nullExample = null;

console.table([accNumber, accHolderName, isAccActive, largeNumber, emptyVariable, nullExample])

// console.log(typeof accNumber) // Type is number.

// console.log(typeof accHolderName) // Type is string.

// console.log(typeof isAccActive) // Type is boolean.

// console.log(typeof null)  // Type is "object".

// console.log(typeof undefined) // Type is "undefined".

// console.log(typeof BigInt) // Type is "function".

// console.log(typeof largeNumber); // Type is "BigInt".

// console.log(typeof nullExample); // Type is "Object".

