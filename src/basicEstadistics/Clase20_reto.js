// Reto: calcula otros tipos de promedio
// Info: https://platzi.com/clases/3435-javascript-practico-matematicas/51516-reto-calcula-otros-tipos-de-promedio/
'use strict';

//? Ejemplo: Promedio ponderado

// Elegí trabajar con la media aritmética ponderada. Este es un promedio muy similar a la media aritmética, pero nos permite definir también el peso, importancia o relevancia de cada elemento en nuestro conjunto de números.

// Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.

// Esta es su fórmula:

// Promedio ponderado
// En español: multiplicar cada número del conjunto por su respectivo crédito, sumar todos los resultados y dividirlo entre la suma de todos los créditos.

// Recuerda que no tienen que ser únicamente 3 números, pueden ser lo que desees, esto solo fue un ejemplo.

// Ahora sí, vamos paso a paso implementando el promedio ponderado en JavaScript:

// Definir el conjunto de números junto al peso de cada elemento
// Para esto vamos a crear un array de objetos llamado notes. Cada objeto tendrá tres valores: course con el nombre de la materia (aunque en realidad no lo utilizaremos 😅), note con la nota de la materia y credit con los créditos de la materia.

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
// Ahora vamos paso a paso construyendo nuestra máquina para sacar promedios ponderados.

// Multiplicar cada número de la lista por su peso
// Vamos a usar de nuevo el método map de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

// Sumar todos los elementos del arreglo de elementos multiplicados por su peso
// Vamos a usar de nuevo el método reduce de los arrays.

// Crearemos una nueva variable sumOfNotesWithCredit que tenga como resultado la suma de todos los elementos del arreglo notesWithCredit. Recuerda que la función reduce recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// Sumar todos los pesos (créditos)
// Sí, otra vez map y reduce. Vamos a crear un nuevo arreglo credits únicamente con los créditos de cada materia y otra nueva variable sumOfCredits que recorra el arreglo credits y sume sus elementos.

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
// Hacer la división entre ambas “sumas”
// Lo último que nos falta es dividir nuestra variable sumOfNotesWithCredit sobre la variable sumOfCredits.

// const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
// En este caso, el promedio ponderado de una nota de 10 con créditos de 2, otra nota de 8 con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado 7.916.

// La media aritmética sin tener en cuenta el peso de cada nota habría sido 8.333.

//? MI EJEMPLO: Promedio geometrico

//  Se utiliza para calcular el crecimiento o la tasa de retorno promedio en una serie de valores. Se obtiene multiplicando todos los valores y luego tomando la raíz n-ésima del producto, donde n es el número de valores.
const numbers = [12, 56, 56, 78, 23, 56, 12, 23, 24, 71, 55, 20, 41, 46]
const numbers2 = [9, 10, 12, 3, 1, 6, 8]
const numbers3 = [1,1,2,3,5,5,5,5,6,9,9,8,8,1,4,4,5,5,5,1,1,1,1]
const nums = [1, 3, 9];

function geometricAverage(array) {
    const product = array.reduce(
        (accumulator, currentValue) => accumulator * currentValue
    )
    console.log(product);
    const average = Math.pow(product, 1/array.length);
    console.log(average);
    return average
}
geometricAverage(nums)