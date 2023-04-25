const priceInput = document.getElementById("Price-input");
const discountInput = document.getElementById("Discount-input");
const discountSection = document.getElementById("discount-section");
const checkbox = document.getElementById("ask-input");
const verifyButton = document.getElementById("Verify-button");
const verify = document.getElementById("Verify");
const button = document.getElementById("Percentage-button");
const result = document.getElementById("Result");
const message = document.getElementById("Message");
//
let discountPercentage;
const coupons = {
    donas: 20,
    tripas: 30,
    toston: 50
}

checkbox.addEventListener("click", checked)
function checked() {
    discountSection.classList.toggle("inactive");
}

verifyButton.addEventListener("click", verifyCoupon);
function verifyCoupon() {
    const discount = discountInput.value
    discountPercentage = `${coupons[`${discount}`]}`; 
    if (discountPercentage == 'undefined') {
        verify.classList.add('error')
        verify.innerText = 'Invalid coupon'
    } else {
        verify.classList.remove('error')
        verify.innerText = `Your coupon has a ${discountPercentage}% of discount`
    }
    return discountPercentage
}

button.addEventListener("click", CalculateDiscount)
function CalculateDiscount() {
    const price = parseInt(priceInput.value) || 0
    const discount = parseInt(discountPercentage) || 0;
    if (!price) {
        result.innerText =''
        message.classList.add('error')
        message.innerText = 'Please intert price';
        return
    }
    if (discount > 100) {
        message.classList.add('error')
        message.innerText = "Discount can't be more than 100%";
        return
    }    
    const newPrice = (price * (100 - discount)) / 100 || price;
    result.innerText = `$${newPrice}`
    message.classList.remove('error')
    message.innerText = 'Have a good day'
}