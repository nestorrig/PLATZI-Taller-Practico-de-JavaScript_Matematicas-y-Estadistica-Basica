"use strict";
//! Formulas
const {log} = console // deestructurando para uso ma agíl
log("hola")

//? Perimetro de un cuadrado
    console.group("Cuadrado")
function squerePerimeter(side) {
    let perimeter = side * 4;
    log(`Your side is ${side}. The perimeter is ${perimeter}`)
}
squerePerimeter(5)

//?Area de un cuadrado
function squareArea(side) {
    let area = side ** 2
    log(`Your side is ${side}. The area is ${area}`)
}
squareArea(5)
    console.groupEnd("Cuadrado")
//? perimetro de un triangulo
    console.group("Triangle")
function trianglePerimeter(side1, side2, side3) {
    let perimeter = side1 + side2 +side3;
    log(`Your sides are ${side1}, ${side2}, ${side3}. The perimeter is ${perimeter}`)
}
trianglePerimeter(5, 4, 3);

//? area de un triangulo
function triangleArea(base, high) {
    let area = (base * high) / 2;
    log(`Your base is ${base} and your high ${high}. The area is ${area}`)
}
triangleArea(4, 6)
    console.groupEnd("Triangle")
