function getTextElementValueById(elementId){
    const getTotalElement = document.getElementById(elementId);
    const totalPriceString = getTotalElement.innerText;
    const totalPrice = parseInt(totalPriceString);
    return totalPrice;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculationSubtotal(){
    const currentPhonePrice = getTextElementValueById('phone-total-price');
    const currentCasePrice = getTextElementValueById('case-total-price');

    // calculate Subtotal
    const subTotal = currentPhonePrice + currentCasePrice;
    setTextElementValueById('sub-total', subTotal);
 
    // calculate tax 10% 
    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax', taxAmount);

    // calculate final total 
    const finalTotal = subTotal + taxAmount;
    setTextElementValueById('final-total', finalTotal);
}