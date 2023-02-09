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


// cardHolderField.value = "Jason de Boer";
// cardNumberField.value = "1234 1234 1234 1234";
// cvcField.value = "123";
// expDateField[0].value = "11";
// expDateField[1].value = "20";

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    validateForm();
})

function validateForm(){
    cardHolderField.style.border = null;
    cardNumberField.style.border = null;
    expDateField[0].style.border = null;
    expDateField[1].style.border = null;
    cvcField.style.border = null;

    cardHolderText.style.display = null;
    cardNumberText.style.display = null;
    cardDateText.style.display = null;
    cvcText.style.display = null;

    let canRender = 1;

    if (!cardHolderField.value && !cardHolderField.value.trim()){
        cardHolderText.textContent = "Name can't be empty!";
        cardHolderText.style.display = "block";
        cardHolderField.style.border = "1px solid red";
        canRender = 0;
    }

    if (!cardNumberField.value && !cardNumberField.value.trim()){
        cardNumberText.textContent = "Card number can't be empty!";
        cardNumberText.style.display = "block";
        cardNumberField.style.border = "1px solid red";
        canRender = 0;
    }

    if (!expDateField[0].value && !expDateField[0].value.trim()){
        cardDateText.textContent = "Date can't be empty!";
        cardDateText.style.display = "block";
        expDateField[0].style.border = "1px solid red";
        canRender = 0;
    }

    if (!expDateField[1].value && !expDateField[1].value.trim()){
        cardDateText.textContent = "Date can't be empty!";
        cardDateText.style.display = "block";
        expDateField[1].style.border = "1px solid red";
        canRender = 0;
    }

    if (!cvcField.value && !cvcField.value.trim()){
        cvcText.textContent = "CVC can't be empty!";
        cvcText.style.display = "block";
        cvcField.style.border = "1px solid red";
        canRender = 0;
    }

    if(canRender == 1){
        if (!/^\d{4}(\s\d{4}){3}$/.test(cardNumberField.value)){
            canRender = 0
            cardNumberText.style.display = "none";
            cardNumberField.style.border = "1px solid red";
        }

        if(!/^\d+$/.test(expDateField[0].value) || expDateField[0].value > 12){
            canRender = 0;
            expDateField[0].style.border = "1px solid red";
            cardDateText.style.display = "none";
        }

        if(!/^\d+$/.test(expDateField[1].value) || expDateField[1].value.length < 2){
            canRender = 0;
            expDateField[1].style.border = "1px solid red";
            cardDateText.style.display = "none";
        }

        if(!/^\d+$/.test(cvcField.value) || cvcField.value.length < 3){
            canRender = 0;
            cvcField.style.border = "1px solid red";
            cvcText.style.display = "none";
        }
    }

    if(canRender == 1){renderCard()};

}

cardHolderField.addEventListener("input", ()=>{
    console.log("test")
    if(cardHolderField.value.length > 25){
        cardHolderField.value = cardHolderField.value.substring(0,25);
    }
})

cardNumberField.addEventListener("input", () => {
    let cardNumber = cardNumberField.value.replace(/\s/g, "");
    cardNumber = cardNumber.match(/.{1,4}/g).join(" ");
    if(cardNumber.length > 19){cardNumber = cardNumber.substring(0,19)}
    cardNumberField.value = cardNumber;
  });

  expDateField[0].addEventListener("input",()=>{
    let expDate = expDateField[0].value.replace(/[A-Za-z\s]/g, "");
    if(expDate.length>2){expDate = expDate.substring(0,2)}
    if(expDate > 12){expDate = expDate.substring(0,1)}
    expDateField[0].value = expDate;
  })

  expDateField[1].addEventListener("input",()=>{
    let expDate = expDateField[1].value.replace(/[A-Za-z\s]/g, "");
    if(expDate.length>2){expDate = expDate.substring(0,2)}
    expDateField[1].value = expDate;
  })

  cvcField.addEventListener("input",()=>{
    let cvc = cvcField.value.replace(/[A-Za-z\s]/g, "");
    if(cvc.length>3){cvc = cvc.substring(0,3)}
    cvcField.value = cvc;
  })

function renderCard(){
    cNumber.textContent = cardNumberField.value;
    cName.textContent = (cardHolderField.value).toUpperCase();
    cDate.textContent = `${expDateField[0].value}/${expDateField[1].value}`;
    cCVC.textContent = cvcField.value;
    document.querySelector("form").style.display = "none";
    document.querySelector(".completeState").style.display = "flex";
}

document.querySelector(".completeState button").addEventListener("click", ()=>{
    cardHolderField.value = "";
    cardNumberField.value = "";
    cvcField.value = "";
    expDateField[0].value = "";
    expDateField[1].value = "";
    document.querySelector("form").style.display = "block";
    document.querySelector(".completeState").style.display = null;
})