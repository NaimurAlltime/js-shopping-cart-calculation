function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;  
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const totalPrice = newCaseNumber * 59;
    const casePriceElement = document.getElementById('case-total-price');
    casePriceElement.innerText = totalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumberPlus = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumberPlus);

    // calculation subtotal 
    calculationSubtotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumberMinus = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumberMinus);

    // calculation subtotal 
    calculationSubtotal();
})