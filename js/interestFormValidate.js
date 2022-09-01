const validMail = /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

const submitButton = document.getElementById("formSubmit");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const emailInput = document.getElementById("emailInput")
const errorText = document.getElementById("errorText")
const form = document.getElementById("form")
const formFeedback = document.getElementById("formFeedback")
const adress = document.getElementById("adress")
const country = document.getElementById("country")
const dayGreeting = document.getElementById("dageTitel")
const dayOutput = document.getElementById("dageInput")
const checkboxes = document.querySelectorAll('input[type=checkbox]')

//Radio buttons
const iot = document.getElementById("iot")
const desktop = document.getElementById("desktop")

//Day checkboxes
const wednesday = document.getElementById("wednesday")
const thursday = document.getElementById("thursday")
const friday = document.getElementById("friday")


submitButton.addEventListener("click", validateEmail)
email.addEventListener("keypress", removeError)
submitButton.addEventListener("click", validateForm)


//Undskyld bo :)
fullName.addEventListener("keypress", function(){
    if (fullName.value.length < 3) {
        fullName.classList.add("error")
    } else {
        fullName.classList.remove("error")
        fullName.classList.add("success")
    }
})
adress.addEventListener("keypress", function(){
    if (adress.value.length < 3) {
        adress.classList.add("error")
    } else {
        adress.classList.remove("error")
        adress.classList.add("success")
    }
})
country.addEventListener("keypress", function(){
    if (country.value.length < 3) {
        country.classList.add("error")
    } else {
        country.classList.remove("error")
        country.classList.add("success")
    }
})


function validateEmail() {

    if (!email.value.match(validMail)) {
        showError();
    } else if (email.value.match(validMail)) {
        email.classList.remove("error")
        email.classList.add("success")
    }
}

function validateForm() {
    if (email.value.match(validMail) && (country.value.length > 3) && (adress.value.length > 3)
    && (fullName.value.length > 3) &&  (wednesday.checked == true)
    || (thursday.checked == true) || (friday.checked == true)) {
        //Form reset
        formFeedback.textContent = ""
        dageTitel.textContent = ""
        dayOutput.textContent = ""

        //Feedback
        formFeedback.textContent ="Hej " + fullName.value + " tak for din tilmelding, vi har sendt kvittering til " + email.value
         if (iot.checked == true) {
            dageTitel.textContent = "Du har vist interesse i IoT på følgende dage";
            for (const checkbox of checkboxes) {
                if (checkbox.checked == true) {
                    dayOutput.textContent += checkbox.value + "   "
                }
            }

         } else{
            dageTitel.textContent = "Du har vist interesse i Desktop"
            for (const checkbox of checkboxes) {
                if (checkbox.checked == true) {
                    dayOutput.textContent += checkbox.value + " "
                }
            }
         }
    }
}


function showError() {
    email.classList.add("error")
    errorText.style = "display: block"

}

function removeError() {
    email.classList.remove("error")
    errorText.style = "display: none"
}
