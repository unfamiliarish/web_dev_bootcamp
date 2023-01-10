/*******************
  hello world
********************/
// console.log("hello world");


/*******************
  console vars, and ifs
********************/
// let total = 3 + 1;
// then can access total in the console

// let random = Math.random()
// if (random < 0.5) {
//     console.log("random is less than 0.5");
//     console.log(random)
// }



/*******************
  conditionals
********************/
// const num = prompt("give me a number 1-10")

// if (num < 3) {
//     console.log("it's small");
// } else if (num < 6) {
//     console.log("it's medium");
// } else if (num < 8) {
//     console.log("num is 6 or 7")
// } else {
//     console.log("the biggest")
// }


/*******************
  inputs
********************/
/* if taking text input, make its formatting consistent
 toUpperCase(), toLowerCase()
*/

/*******************
  nested conditionals (the example is terrible to read)
********************/

// const password = prompt("please enter a new password");

/* terrible */
// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1) {
//         console.log("valid password");
//     } else {
//         console.log("password cannot contain a space");
//     }
// } else {
//     console.log("password must be at least 6 characters");
// }

/* much better */
//  must be 6+ characters
// if (password.length < 6) {
//     console.log("password must be at least 6 characters");
// } else if (password.indexOf(" ") !== -1) {
//     console.log("password cannot contain a space");
// } else {
//     console.log("valid password");
// }


/*******************
  operators
********************/

// AND
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("valid");
} else {
  console.log("try again");
}

// OR
let age = 90;

if (age < 6 || age >= 65) {
  console.log("FREE");
} else {
  console.log("$10")
}


/*******************
  switch statement
********************/

const day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("invalid number");
}