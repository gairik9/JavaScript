// JavaScript Arrays :

// let arrOne = [1,2,3,4,5];

// let arrTwo = ['A','B','C'];

// console.log(arrOne);

// console.log(`Element at position 0 is ${arrOne[0]}`)

// console.log(arrTwo);

// arrOne.push(6)

// console.log(arrOne);

// arrOne.pop()

// console.log(arrOne);

// console.log(arrTwo.includes('A'))

// console.log(arrTwo.indexOf('C'))

// console.log(arrTwo.concat(arrOne));

// let marvelCharacters = ['Iron Man', 'Spider Man', 'Thor'];

// let dcCharacters = ['Batman','Flash','Wonder Woman','Superman'];

// marvelCharacters.push(dcCharacters)

// console.log(marvelCharacters);

// console.log(marvelCharacters[3][1]);

// let response = marvelCharacters.concat(dcCharacters);

// console.log(response);

// Combining Arrays Using Spread Operator : 

// let response = [...marvelCharacters,...dcCharacters];

// console.log(response);

// let names = ['Ashley','Bella',['Rick','Mike',['Monkey','Cow','Zebra']]];

// console.log(names);

// let newFlatArray = names.flat(Infinity);

// console.log(newFlatArray);

let text = 'ABCDEFGHIJKL';

let newArray = text.split();

console.log(newArray);

console.log(Array.isArray(newArray));

console.log(Array.from(text));


