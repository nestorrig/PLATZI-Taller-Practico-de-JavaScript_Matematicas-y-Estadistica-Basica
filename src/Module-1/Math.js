'use strict';

// Formulas
function square(side) {
    const perimeter = side * 4;
    const area = side ** 2;

    const result = `Square side: ${side} | perimeter: ${perimeter}, area: ${area}`;
    console.log(result);
}
square(5);

function triangle(side1, side2, side3) {
    const perimeter = side1 + side2 + side3;
    // Heron formula
    const S = perimeter / 2;
    const area = Math.sqrt(S*(S - side1)*(S - side2)*(S - side3))

    const result = `Triangle sides: ${side1}, ${side2}, ${side3},  | perimeter: ${perimeter}, area: ${area}`;
    console.log(result);
}
triangle(5, 6, 8);

function circle(radio) {
    const perimeter = 2 * radio * Math.PI;
    const area = (radio ** 2) * Math.PI;

    const result = `Circle radio: ${radio} | perimeter: ${perimeter}, area: ${area}`;
    console.log(result);
}
circle(7)