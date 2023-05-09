'use strict';
const numbers = [12, 56, 89, 56, 78, 23, 56, 12, 23, 24, 71, 55, 20, 41, 46, 100]
const numbers2 = [10, 13, 2, 50, 80, 3, 15, 43, 5, 6, 7]

function average(array) {
    const sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    )
    const average = sum / array.length
    return average
}
average(numbers) // 44.133333
average(numbers2) // 3

// saber si un array es par o no
const isEven = array => array.length % 2 == 0 ? true : false
isEven(numbers)

function mediana(array) {
    let indexMediana;
    let median
    const newArray  = array.sort((a, b) => a - b);
    const isEven = array.length % 2 == 0 ? true : false
    if (isEven) {
        indexMediana = newArray.length / 2;
        median = average( [newArray[indexMediana], newArray[indexMediana - 1] ] )
        console.log(median);
    } else {
        indexMediana = Math.floor(newArray.length / 2);
        median = newArray[indexMediana]
        console.log(median);
    }
    console.log(newArray);
}
mediana(numbers)
mediana(numbers2)