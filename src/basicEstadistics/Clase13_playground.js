// Transforma objetos en arrays
// Info: https://platzi.com/clases/3435-javascript-practico-matematicas/55620-playground-transforma-objetos-en-arrays/
'use strict';
function solution(obj) {
    const array = [];
    const keys = Object.keys(obj);
    const values = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
        array.push(
            {
                id: keys[i], 
                name: values[i],
            }, 
        )
    }
    console.log(array);
    return array
}
function solution1(obj) {
    console.log(Object.entries(obj).map(value => {
        return { id: value[0], name: value[1]}}))
}

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

solution(obj);
solution1(obj);

// Output

// [
//     {
//     id: "123",
//     name: 'Juanito Alcachofa',
//     },
//     {
//     id: "456",
//     name: 'Juanita Alcaparra',
//     },
// ]