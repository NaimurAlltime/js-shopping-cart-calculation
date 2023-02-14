function updatePhoneNumber(isIncrease){
    const phoneFieldElement = document.getElementById('phone-number-field');
    const previousPhoneNumberString = phoneFieldElement.value;
    const previousPhoneNumber = parseInt(previousPhoneNumberString);
    let newPhoneNumber; 
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneFieldElement.value = newPhoneNumber;
    return newPhoneNumber;
}

function UpdatePhoneTotalPrice(newPhoneNumber){
    const PhoneTotalPrice = newPhoneNumber * 1219;
    const phonePriceElement = document.getElementById('phone-total-price');
    phonePriceElement.innerText = PhoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumberPlus = updatePhoneNumber(true);
    UpdatePhoneTotalPrice(newPhoneNumberPlus);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumberMinus = updatePhoneNumber(false);
    UpdatePhoneTotalPrice(newPhoneNumberMinus);
})