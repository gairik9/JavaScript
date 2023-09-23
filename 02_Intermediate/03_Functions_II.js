// More On Functions : 

// 'this' keyword refers to the current context.
// const userSubscription = {
//     username : 'ghost',
//     price : 999,
//     message : function(){
//         console.log(`Welcome to JS, ${this.username}`)
//     }
// }

// console.log(userSubscription.message());


// const Sum = function(a,b){
//     console.log(a+b)
// }
// Sum(10,20);

// Arrow Functions :
// const Sum = (a,b) =>{
//     console.log(a+b)
// }
// Sum(10,20);

// Immediately Invoked Function Expression - IIFE

(function Grreting(){
    console.log('Good Morning!');
})();