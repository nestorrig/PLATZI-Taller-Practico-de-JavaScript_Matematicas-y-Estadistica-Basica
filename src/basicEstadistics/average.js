'use strict';
const numbers = [12, 56, 56, 78, 23, 56, 12, 23, 24, 71, 55, 20, 41, 46]
const numbers2 = [9, 10, 12, 3, 1, 6, 8]
const numbers3 = [1,1,2,3,5,5,5,5,6,9,9,8,8,1,4,4,5,5,5,1,1,1,1]

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
        const indexMediana = Math.floor(arrayB.length / 2);
        median = arrayB[indexMediana]
    }
    console.log(arrayB);
    console.log(median);
}
mediana(numbers)
mediana(numbers2)

function mode(array) {

    const frecuency = {};

    array.forEach(number => {
        // frecuency[number] = (frecuency[number] || 0) + 1;
        if (frecuency[number]) {
            frecuency[number] += 1;
        } else {
            frecuency[number] = 1;
        }
    });

    console.log(frecuency);
    let mode = [];
    let maxFrecuency = 0;
    for (const num in frecuency) {
        if (frecuency[num] > maxFrecuency) {
            mode = [parseInt(num)];
            maxFrecuency = frecuency[num]
        } else if(frecuency[num] === maxFrecuency) {
            mode.push(parseInt(num));
        }
    }
    console.log(mode);
}
mode(numbers3)