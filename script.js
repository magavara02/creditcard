const cardHolderField = document.querySelector(".C-H input")
const cardNumberField = document.querySelector(".C-N input");
const expDateField = document.querySelectorAll(".C-L-I input");
const cvcField = document.querySelector(".C-R input");

const cardHolderText = document.querySelector(".C-H p");
const cardNumberText = document.querySelector(".C-N p");
const cardDateText = document.querySelector(".C-L p");
const cvcText = document.querySelector(".C-R p");

const cNumber = document.querySelector(".C-CardNumber");
const cName = document.querySelector(".cName");
const cDate = document.querySelector(".cDate");
const cCVC = document.querySelector(".C-CVC");

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    validateForm();
})

function validateForm(){
    if (!cardHolderField.value && !cardHolderField.value.trim()){
        cardHolderText.textContent = "Name can't be empty!";
        cardHolderText.style.display = "block";
        cardHolderField.style.border = "1px solid red";
    }

    if (!cardNumberField.value && !cardNumberField.value.trim()){
        cardNumberText.textContent = "Card number can't be empty!";
        cardNumberText.style.display = "block";
        cardNumberField.style.border = "1px solid red";
    }

    if (!expDateField[0].value && !expDateField[0].value.trim()){
        cardDateText.textContent = "Date can't be empty!";
        cardDateText.style.display = "block";
        expDateField[0].style.border = "1px solid red";
    }

    if (!expDateField[1].value && !expDateField[1].value.trim()){
        cardDateText.textContent = "Date can't be empty!";
        cardDateText.style.display = "block";
        expDateField[1].style.border = "1px solid red";
    }

    if (!cvcField.value && !cvcField.value.trim()){
        cvcText.textContent = "CVC can't be empty!";
        cvcText.style.display = "block";
        cvcField.style.border = "1px solid red";
    }

}

function renderCard(){
    cNumber.textContent = cardNumberField.value;
    cName.textContent = (cardHolderField.value).toUpperCase();
}