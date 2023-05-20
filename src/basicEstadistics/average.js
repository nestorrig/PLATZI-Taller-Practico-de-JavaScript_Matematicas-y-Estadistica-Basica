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
        frecuency[number] = (frecuency[number] || 0) + 1;
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
    // const arraydesordenado = Object.entries(frecuency)
    // console.log(arraydesordenado);
    // let arrayOrdenado = arraydesordenado.sort((a,b) => a[1] - b[1])
    // console.log(arrayOrdenado);
}
mode(numbers3)

// Explicación
// ---
// Dependiendo de las dimensiones del arreglo, serán los corchetes seguidos que podemos usar para acceder a tal elemento de la lista, veamos el siguiente arreglo de tres dimensiones:



// ```js
// const array3D = [
//     [
//         [1, 2, 3], 
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// ];
// ```
// Supongamos que queremos acceder al número **3**:


// ```js
// // paso 1
// array3D[0] // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// // paso 2
// array3D[0][0] // [ 1, 2, 3 ]
// // paso 3
// array3D[0][0][2] // 3
// ```

// Ahora que ya sabes como acceder a los elementos de un arreglo dependiendo su dimensión, ahora estás listo para resolver el reto.

// ---
// > Como lo dijo el profe Juan DC, es relativamente facil, pero tenias que pensarlo un buen rato.

// 1. Tenemos el siguiente arreglo:


// ```js
// const numbers3 = [1,1,2,3,5,5,5,5,6,9,9,8,8,1,4,4,5,5,5,1,1,1,1]
// ```
// 2. Lo trasformamos en un objeto que tenga al número(key) y las veces que se repite(value):



// ```js
// { '1': 7, '2': 1, '3': 1, '4': 2, '5': 7, '6': 1, '8': 2, '9': 2 }
// ```
// 3. Usamos ```Object.entries()``` para obtener un array de dos dimensiones:


// ```js
// [
//   [ '1', 7 ],
//   [ '2', 1 ],
//   [ '3', 1 ],
//   [ '4', 2 ],
//   [ '5', 7 ],
//   [ '6', 1 ],
//   [ '8', 2 ],
//   [ '9', 2 ]
// ]
// ```
// Entonces como los ordenamos usando solo los valores de los values, **pues de igual manera que usamos el método sort, pero yendo al segundo nivel**, así queda:


// ```js
// let arrayOrdenado = arraydesordenado.sort((a,b) => a[1] - b[1])
//     console.log(arrayOrdenado);

// [
//   [ '2', 1 ],
//   [ '3', 1 ],
//   [ '6', 1 ],
//   [ '4', 2 ],
//   [ '8', 2 ],
//   [ '9', 2 ],
//   [ '1', 7 ],
//   [ '5', 7 ]
// ]
// ```