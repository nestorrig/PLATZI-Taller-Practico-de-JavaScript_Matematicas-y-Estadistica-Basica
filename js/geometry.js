'use strict';

const errorMessage = 'Please insert data';
//SQUARE
const inputSquare = document.getElementById('side-square');
const resultPerimeterSquare = document.getElementById('square-perimeter');
const resultAreaSquare = document.getElementById('square-area');
const buttonSquare = document.getElementById('calculate-square');
//CIRCLE
const inputCircle = document.getElementById('radio-circle');
const resultPerimeterCircle = document.getElementById('circle-perimeter');
const resultAreaCircle = document.getElementById('circle-area');
const buttonCircle = document.getElementById('calculate-circle');
//TRIANGLE
const inputTriangle1 = document.getElementById('side1-triangle');
const inputTriangle2 = document.getElementById('side2-triangle');
const inputTriangle3 = document.getElementById('side3-triangle');
const resultPerimeterTriangle = document.getElementById('triangle-perimeter');
const resultAreaTriangle = document.getElementById('triangle-area');
const buttonTriangle = document.getElementById('calculate-triangle');
//SCALENE TRIANGLE
const inputScaleneTriangle1 = document.getElementById('side1-scalene-triangle');
const inputScaleneTriangle2 = document.getElementById('side2-scalene-triangle');
const inputScaleneTriangle3 = document.getElementById('side3-scalene-triangle');
const resultHeightScalene1 = document.getElementById('scalene-height1');
const resultHeightScalene2 = document.getElementById('scalene-height2');
const resultHeightScalene3 = document.getElementById('scalene-height3');
const buttonScaleneTriangle = document.getElementById('calculate-scalene');
//ISOSCELES TRIANGLE
const inputIsoscelesTriangle1 = document.getElementById('side-isosceles-triangle');
const inputIsoscelesTriangle2 = document.getElementById('base-isosceles-triangle');
const resultHeightIsosceles = document.getElementById('isosceles-height');
const buttonIsoscelesTriangle = document.getElementById('calculate-isosceles');

buttonSquare.addEventListener('click', () => {showResultsSTC('square',inputSquare, resultPerimeterSquare, resultAreaSquare)});
buttonCircle.addEventListener('click', () => {showResultsSTC('circle',inputCircle, resultPerimeterCircle, resultAreaCircle)});
buttonTriangle.addEventListener('click', () => {showResultsSTC('triangle',[inputTriangle1, inputTriangle2, inputTriangle3], resultPerimeterTriangle, resultAreaTriangle)});
function showResultsSTC(shape,input, perimeterTag, areaTag){
    let results;
    switch (shape) {
        case 'square':
            results = PlatziMath.square(input.value);
            printResults(results);
            break;
        case 'circle':
            results = PlatziMath.circle(input.value);
            printResults(results);
            break;
        case 'triangle':
            const side1 = parseFloat(input[0].value) || 0;
            const side2 = parseFloat(input[1].value) || 0;
            const side3 = parseFloat(input[2].value) || 0;
            results = PlatziMath.triangle(side1, side2, side3);
            printResults(results);
            break;
        default:
            break;
    }
    function printResults (object) {
        if ( (object.perimeter === 0 && object.area === 0)) {
            perimeterTag.innerText = errorMessage;
            areaTag.innerText = errorMessage;
            perimeterTag.classList.add("error");
            areaTag.classList.add("error");
        } else {
            perimeterTag.innerText = object.perimeter.toFixed(2) + 'u';
            areaTag.innerHTML = object.area.toFixed(2) + 'u<sup>2</sup>';
            perimeterTag.classList.remove("error");
            areaTag.classList.remove("error");
        }
    }
}
buttonScaleneTriangle.addEventListener('click', () => {showHeights('scalene', [inputScaleneTriangle1, inputScaleneTriangle2, inputScaleneTriangle3], [resultHeightScalene1, resultHeightScalene2, resultHeightScalene3])});
buttonIsoscelesTriangle.addEventListener('click', () => {showHeights('isosceles', [inputIsoscelesTriangle1, inputIsoscelesTriangle2], resultHeightIsosceles)});
function showHeights(triangle, inputs, resultsTags) {
    if (triangle === 'scalene') {
        const side1 = parseInt(inputs[0].value);
        const side2 = parseInt(inputs[1].value);
        const side3 = parseInt(inputs[2].value);
        if (side1 && side2 && side3) {
            const results = PlatziMath.scaleneTriangleheight(side1, side2, side3);
            if (!Array.isArray(results)) {
                for (let i = 0; i < resultsTags.length; i++) {
                    resultsTags[i].innerText = results.message;
                    resultsTags[i].classList.add('error');
                }
            } else {
                for (let i = 0; i < resultsTags.length; i++) {
                    resultsTags[i].innerText = results[i].toFixed(2) + 'u';
                    resultsTags[i].classList.remove('error');
                }
            }
        } else {
            resultsTags.forEach(result => result.innerText = errorMessage);
            resultsTags.forEach(result => result.classList.add('error'));
        }
    }
    if (triangle === 'isosceles') {
        const side = parseInt(inputs[0].value);
        const base = parseInt(inputs[1].value);
        if (side && base) {
            const results = PlatziMath.isocelesTriangleHeight(side, base);
            if (results.height) {
                resultsTags.innerText = results.height.toFixed(2) + 'u';
                resultsTags.classList.remove('error');
            }
            if (results.message) {
                resultsTags.innerText = results.message;
                resultsTags.classList.add('error');
            }
        } else {
            resultsTags.innerText = errorMessage;
            resultsTags.classList.add('error');
        }
    }
    
}


