const priceInput = document.getElementById("Price-input");
const discountInput = document.getElementById("Discount-input");
const button = document.getElementById("Percentage-button");
const result = document.getElementById("Result");
const message = document.getElementById("Message");

const price = parseInt(priceInput.value)



button.addEventListener("click", CalculateDiscount)

function CalculateDiscount() {
    const price = parseInt(priceInput.value)
    const discount = parseInt(discountInput.value)
    if (!price || !discount) {
        message.innerText = 'Please intert all data';
        return
    }
    if (discount > 100) {
        message.innerText = "Discount can't be more than 100%";
        return
    }    
    const newPrice = (price * (100 - discount)) / 100 || 0;

    result.innerText = `$${newPrice}`
    message.innerText = ''
}