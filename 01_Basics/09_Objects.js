// JavaScript Objects :

// const user = {
//     name : "Elon Mask",
//     username : "ghost",
//     address : "LA",
//     phone : "333-091234897",
//     availability : ['Mon', 'Tue', 'Wed'],
// };

// Accessing Objects :

// console.log(user.name);

// OR

// console.log(user['username']);

// Changing Property :

// user.name = 'Mark Zuckerberg';

// console.log(user)

// Function As A Property :

// user.greeting = function (){
//     console.log(`Welcome To JavaScript, ${this.name}`);
// }
// console.log(user.greeting);

// console.log(user.greeting());

// const tinderUser = new Object();

// tinderUser.id = "12qw34e1e4";

// tinderUser.name = "Mikey";

// tinderUser.isActive = true;

// console.log(tinderUser);

// const user = {
//     name : "Elon Mask",
//     username : "ghost",
//     address : "LA",
//     phone : "333-091234897",
//     availability : ['Mon', 'Tue', 'Wed'],
//     experience :
//     {
//         first : 'Tesla',
//         second : 'Space X',
//         third : {
//             oldName : 'Twitter',
//             newName : 'X'
//         }
//     }
// };

// console.log(user.experience);

// console.log(user.experience.second);

// console.log(user.experience.third);

// const objOne = {
//     1: 'A',
//     2: 'B',
//     3: 'C'
// }

// const objTwo = {
//     4: 'D',
//     5: 'E',
//     6: 'F'
// }

// const objThird = {
//     objOne,objTwo
// }

// console.log(objThird);

// const objFourth = {...objOne,...objTwo};

// const objFourth = Object.assign({},objOne,objTwo);

// console.log(objFourth);`

// console.log(Object.keys(objFourth));

// console.log(Object.values(objFourth));

// OBJECT DESTRUCTURING :

const course = {
    name : 'JavaScript',
    source : 'Udemy',
    instructor : 'MDN',
    price : '1599'
}

// Destructured :

const {instructor} = course;

const {instructor : CourseInstructor} = course;

console.log(instructor);

console.log(CourseInstructor);

