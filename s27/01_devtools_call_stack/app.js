const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5);

// Can use the Sources tab in chrome devtools to set breakpoints and debug code
// also can watch the call stack and keep track of various variables :)