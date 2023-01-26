const nums = [1, 2, 3, 4, 5];

// nums.forEach(function (n) {
// 	console.log(n*n);
// })

// nums.forEach(function (n) {
// 	if (n % 2 === 0) {
// 		console.log(n);
// 	}
// })

// // pretty uncommon
// function print(val) {
// 	console.log(val);
// }

// nums.forEach(print);

// // more common
// nums.forEach(function (el) {
//     console.log(el);
// });

const movies = [
    {
        name: "Parasite",
        score: 87,
        year: 2021
    },
    {
        name: "Knives Out",
        score: 85,
        year: 2020
    },
    {
        name: "Harry Potter",
        score: 92,
        year: 2001;
    },
    {
        name: "Alien",
        score: 90,
        year: 1985,
    }
]

/*  just defines a function, doesn't execute it
    so the movies.forEach function doesn't
    execute on its own  */
// let f = function (movie) {...}

// movies.forEach(function (movie) {
//     console.log(`${movie.name}: ${movie.score}/100`);
// });

let doubles = nums.map(function (n) {
    return n * 2;
});

let titles = movies.map(function (movie) {
    return movie.name;
})


// const movieData = movies.map(function (movie) {
//     return `${movie.name} has a score of ${movie.score / 10}`
// })

// const movieData2 = movies.map((movie) => {
//     return `${movie.name} has a score of ${movie.score / 10}`
// })

const movieData3 = movies.map((movie) => (
    `${movie.name} has a score of ${movie.score / 10}`)
)

/* ******** ********
    setTimeout(), setInterval()
******** ******** */

// console.log("hello");
// // will wait 3s then console log hi
// setTimeout(() => {
//     console.log("3s... hi");
// }, 3000);

// console.log("world");

// // ---

// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000);

const prices = [9.99, 47.98, 1.50, 14.49]

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
});

const highestRated = movies.reduce((bestMovie, movie) => {
    if (movie.score > bestMovie.score) {
        return movie;
    }
    return bestMovie;
});
const bestMovie = highestRated.name;

// ---

const evens = [2, 4, 6, 8];

evens.reduce((sum, num) => sum + num, 100);

// --- 

const person = {
    firstName: "Helen",
    lastName: "Gomez",
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// -- 

const scores = [7, 6, 5, 4, 3, 2, 1];

const first = scores[0];
const second = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

// --- object destructuring

const user = {
    firstName: "Foo",
    lastName: "Bar",
    email: "foo@gmail.com",
    password: "aj#4dKJ*dwekls",
    city: "Los Angeles",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint!",
    born: 1930,
    died: 1978
}



// vv these are equivalent vv

// const email = user.email;
// const { email } = user;


const { email, firstName, lastName, bio } = user;

const { born } = user;
const { born: birthYear, died: deathYear } = user;

// ---

const user2 = {
    firstName: "Baz",
    lastName: "Bax",
    email: "baz@gmail.com",
    password: "abc12345",
    city: "Sacramento",
    state: "California",
    born: 1985,
}

const { city, state, died = "N/A" } = user2;
died;  // N/A


// -- Parameter destructuring

function fullName(runner) {
    return `${runner.first} ${runner.last}`
}

function fullNmame2({ first, last }) {
    return `${first} ${last}`
}

const runner = {
    first: "Foo",
    last: "Bar",
    country: "Kenya"
}

// -- another example

// filter so only get movies with score >= 90
movies.filter(movie) => movie.score >= 90)

// same results
movies.filter(({ score }) => score >= 90)

moviesMap1 = movies.map(movie => {
    return `${movie.name} (${movie.year}) is rated ${movie.score}`
})

moviesMap2 = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})