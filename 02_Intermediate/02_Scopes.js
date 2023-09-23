// JavaScript Scopes :

// One :
// {
// let sampleOne = 10;
// const sampleTwo = 20;
// var sampleThree = 30;

// console.log(sampleOne);
// console.log(sampleTwo);
// console.log(sampleThree);
// }

// Two :
// if(true){
    // let sampleOne = 10;
    // const sampleTwo = 20;
    // var sampleThree = 30;
// }

// console.log(sampleOne);
// console.log(sampleTwo);
// console.log(sampleThree);

// Three : 
// let sampleOne = 100;
// let sampleTwo = 500;
// if(true){
//     let sampleOne = 10;
//     const sampleTwo = 20;
//     var sampleThree = 30;
// }

// console.log(sampleOne);
// console.log(sampleTwo);
// console.log(sampleThree);

// Four :
function One(){
    const username = 'Mikey';

    function Two(){
        const website = "https://www.google.com"; 

        console.log(username);
    }
    // console.log(website); // Error
    Two();
}

One();


