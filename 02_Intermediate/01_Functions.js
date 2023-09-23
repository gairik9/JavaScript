// JavaScript - Functions :

// One :

// function Test(){
//     console.log('J');
//     console.log('S');
// }
// Test();

// Two :
// function sum(x,y){
//     console.log(x+y);
// }
// sum(2,3);

// Three :
// function Multiply(x,y){
//     return x*y;
// }
// const response = Multiply(2,2);
// console.log(response);

// Four :
// function LoggedInUser(username){
//     return `${username} just appeared.`
// }

// const userStatus = LoggedInUser('Ashley');
// console.log(userStatus);

// function LoggedInUser(username='Sam'){
//         return `${username} just appeared.`
// }
    
// const userStatus = LoggedInUser('Ashley');
// console.log(userStatus);

// const userStatusTwo = LoggedInUser();
// console.log(userStatusTwo);

// Five : Example Of Rest Operator Using Function :

function Pack(...n){
    return n;
}

console.log(Pack(120,20,60,340)) 