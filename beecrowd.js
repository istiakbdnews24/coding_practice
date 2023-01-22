

// console.log("Input a number");

// const input = require('readline');

// var rl = input.createInterface(
//     process.stdin, process.stdout);

// var  age;


// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
// });

// // console.log("Your number is", input);


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a;
var b;
var c;


lines.question("Enter 1st number", (a)=>{
    console.log("Your number is", a)
})














