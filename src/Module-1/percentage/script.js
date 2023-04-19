const priceInput = document.getElementById("Price-input");
const discountInput = document.getElementById("Discount-input");
const button = document.getElementById("Percentage-button");
const result = document.getElementById("Result");

const price = parseInt(priceInput.value)



button.addEventListener("click", CalculateDiscount)

function CalculateDiscount() {
    const price = parseInt(priceInput.value)
    const discount = parseInt(discountInput.value)
    
    const newPrice = (price * (100 - discount)) / 100;

    result.innerHTML = `$${newPrice}`
    
    // const result = `Original amount: ${price}, discount: %${discount} | New price: ${newPrice}`
    // console.log(result);
}