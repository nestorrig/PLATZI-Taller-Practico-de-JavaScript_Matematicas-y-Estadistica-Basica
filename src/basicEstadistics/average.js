'use strict';
const numbers = [12, 56, 56, 78, 23, 56, 12, 23, 24, 71, 55, 20, 41, 46]
const numbers2 = [9, 10, 12, 3, 1, 6, 8]

function average(array) {
    const sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    )
    const average = sum / array.length
    return average
}
average(numbers) // 44.13
average(numbers2) // 3

// saber si un array es par o no
const isEven = array => array.length % 2 == 0 ? true : false
isEven(numbers)

function mediana(array) {
    let median
    const arrayB  = array.sort((a, b) => a - b);
    
    if (isEven(array)) {
        const index1 = arrayB.length / 2;
        const index2 = (arrayB.length / 2) - 1;
        const list = [arrayB[index1], arrayB[index2]]
        median = average(list)
    } else {
        let indexMediana = Math.floor(arrayB.length / 2);
        median = arrayB[indexMediana]
    }
    console.log(arrayB);
    console.log(median);
}
mediana(numbers)
mediana(numbers2)