'use strict';
const inputPrice = document.getElementById('price-input');

const inputPercentage = document.getElementById('percentage-discount');
const buttonPercentage = document.getElementById('Percentage-button');
const resultPercentage = document.getElementById('percentageResult');

const inputCoupon = document.getElementById('coupon-discount');
const buttonCoupon = document.getElementById('coupon-button');
const resultCoupon = document.getElementById('couponResult');
const couponClues =document.getElementsByClassName('clue-item');
const coupons = {
    javascript: [10,1],
    debugging: [20,2],
    compilation: [30,3],
    testing: [40,4],
    tree: [50,5],
    coding: [60,6],
    portability: [70,7],
    function: [80,8],
    modularization: [90,9],
    refactoring: [99,10]
}

function clueColor(reference) {
    let i = 1;
    for (const clue of couponClues) {
        clue.classList.add(i);
        i++
        if (clue.classList.contains(reference)) {
            clue.classList.add('correct');
        }
    }
}
function printResult(string, status, resultTag) {
    resultTag.innerText = string;
    if (status === 'OK') {
        resultTag.classList.remove('error');
    } else if(status === 'error') {
        resultTag.classList.add('error');
    }
}

buttonPercentage.addEventListener('click', newPriceByPercentage)
function newPriceByPercentage() {
    const price = inputPrice.value;
    const percentage = inputPercentage.value;
    if (!price || !percentage) {
        printResult('Please insert data', 'error', resultPercentage);
        return
    }
    const newPrice = (PlatziMath.percentage(price, percentage).toFixed(2));
    printResult(`The new price is: $${newPrice}`, 'OK', resultPercentage);
}

buttonCoupon.addEventListener('click', newPriceByCoupon)
function newPriceByCoupon() {
    const price = inputPrice.value;
    const coupon = inputCoupon.value;
    const couponValue = coupons[coupon]?.[0];
    const couponClue = coupons[coupon]?.[1];
    if (!price || !coupon) {
        printResult('Please insert data', 'error', resultCoupon);
        return
    }
    if (couponValue === undefined) {
        printResult('Invalid coupon', 'error', resultCoupon);
        return
    }
    const newPrice = (PlatziMath.percentage(price, couponValue).toFixed(2));
    printResult(`The new price is: $${newPrice}, you had ${couponValue}% of discount`, 'OK', resultCoupon);
    clueColor(couponClue)
}