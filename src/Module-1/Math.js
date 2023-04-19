'use strict';

// Formulas

// Clase 2
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

// Clase 3
function circle(radio) {
    const perimeter = 2 * radio * Math.PI;
    const area = (radio ** 2) * Math.PI;

    const result = `Circle radio: ${radio} | perimeter: ${perimeter}, area: ${area}`;
    console.log(result);
}
circle(7)

// Clase 4 (altura de un triangulo isósceles no equilatero)
function height(side1, base) {
    if (side1 == base) {
        console.warn('Este no es un triangulo isósceles no equilatero');
    } else {
        const height = Math.sqrt( (side1 ** 2) - ( (base ** 2) / 4) )
    
        const result = `Triangle side1: ${side1}, Triangle base: ${base} | height: ${height}`;
        console.log(result);
    }
}
height(6, 3)
// reto (altura de un triangulo escaleno)
function scalaneTriangleheight(side1, side2, side3) {
    if (side1 == side2 || side1 == side3 || side2 == side3) {
        console.warn('Este no es un triangulo escaleno');
    } else {
        // Heron formula
        const perimeter = side1 + side2 + side3;
        const S = perimeter / 2;
        const heightSide1 = (2 / side1) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) );
        const heightSide2 = (2 / side2) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) );
        const heightSide3 = (2 / side3) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) );
    
        const result = `Triangle sides: ${side1}, ${side2}, ${side3},  | height Side1: ${heightSide1}, height Side2: ${heightSide2}, height Side3: ${heightSide3},`
        console.log(result);
    }
}
scalaneTriangleheight(3,4,5)
// clase 5: Playground (Calcula la Altura de un Triángulo Escaleno)
function Playground1(side1, side2, side3) {
    if (side1 == side2 || side1 == side3 || side2 == side3) {
        return false
    } else {
        const S = (side1 + side2 + side3) / 2;
        const height = Math.floor((2 / side1) * (Math.sqrt( S * (S - side1) * (S - side2) * (S - side3) ) ));
        return height
    }
}
Playground1(16,8,10) // 4 
Playground1(6,6,6) // false