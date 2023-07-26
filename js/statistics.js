'use strict';

const inputList = document.getElementById('number-list-input');
const button = document.getElementById('basic-statistics-button');
const messageUser = document.getElementById('messageUser')

const resultMode = document.getElementById('Mode-result');
const resultMean = document.getElementById('Mean-result');
const resultMedian = document.getElementById('Median-result');
const resultRange = document.getElementById('Range-result');
const resultsItems = document.getElementsByClassName('result')

const regExNumbers = /(\d+\.*\d*)/g
const regExSeparator = /(,\s)/g
const regExError = /[a-zA-Z]+/g

function printError(message) {
    messageUser.innerText = message
    messageUser.classList.add('error')
    for (const item of resultsItems) {
        item.innerText = '';
    }
}
function printResults(list) {
    messageUser.innerText = 'These are the results:'
    messageUser.classList.remove('error')

    resultMean.innerText = PlatziMath.average(list).toFixed(5);
    resultMedian.innerText = PlatziMath.mediana(list);
    resultMode.innerText = PlatziMath.mode(list);
    resultRange.innerText = PlatziMath.range(list);
}

button.addEventListener('click', validateInput)
function validateInput() {
    const input = inputList.value;
    const list = input.match(regExNumbers);
    const separartors = input.match(regExSeparator)
    const error = input.match(regExError);
    if (!input) {
        printError('Please insert data')
        return
    }
    if (!list) {
        printError('Please insert numbers')
        return
    }
    if (error) {
        printError('Please insert numbers, no words')
        return
    }
    if (!separartors) {
        printError('Please insert more that one number')
        return
    }
    if (list.length - 1 != separartors.length) {
        printError('Please follow the example')
        return
    }
    const numbers = list.map(number => parseFloat(number))
    printResults(numbers)
}