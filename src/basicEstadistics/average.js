'use strict';
const numbers = [12, 56, 89, 56, 78, 23, 56, 12, 23, 24, 71, 55, 20, 41, 46]
const numbers2 = [1, 2, 3, 4, 5]

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
    const newArray  = array.sort((a, b) => a - b);
    const isEven = array.length % 2 == 0 ? true : false
    if (isEven) {

    } else {
        const indexMediana = Math.floor(newArray.length / 2);
        const median = newArray[indexMediana]
        console.log(median);
    }
    console.log(newArray);
}
mediana(numbers)
mediana(numbers2)