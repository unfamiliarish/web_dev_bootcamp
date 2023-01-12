function makeMysteryFunc() {
	const rand = Math.random();
	if (rand > 0.5) {
		return function () {
			console.log("nice");
		}
	} else {
		return function () {
			console.log("oh no");
		}
	}
}

// makes a factory function that allows you to set 
// the params each time 
function makeBetweenFunc(min, max) {
	return function (num) {
		return min <= num && num <= max;
	}
}

// allows you to create new named functions 
// without having repeated code
let isBetween1And10 = makeBetweenFunc(1, 10)
let isBetween5And50 = makeBetweenFunc(5, 50)

// ---

let myMath = {
	PI: 3.14,
	square: function (num) {
		return num ** 2;
	},
	cube: function (num) {
		return num ** 3;
	}
}

// for functions, don't have to use colons for methods
// shorthand
let myMath2 = {
	PI: 3.14,
	square(num) {
		return num ** 2;
	},
	cube(num) {
		return num ** 3;
	}
}


// this keyword

const cat = {
	name: "Blue Steele",
	color: "grey",
	breed: "scottish fold",
	meow() {
		console.log(`${this.name} says meow`);
		console.log(this);
	}
}

// try/catch 

function yell(msg) {
	try {
		console.log(msg.toUpperCase().repeat(2));
	} catch {
		console.log(`String argument required. Instead received type: ${typeof msg}`);
	}
}