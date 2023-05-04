'use strict';
const numbers = [12, 56, 89, 56, 78, 23, 56, 12, 23, 24, 71, 55, 20, 41, 46]
const numbers2 = [1, 2, 3, 4, 5]

function average(array) {
    const sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 10
    )
    const average = sum / array.length
    return average
}
average(numbers) // 44.133333
average(numbers2) // 3
// saber si un array es par o no
const isEven = array => array.length % 2 == 0 ? true : false
isEven(numbers)