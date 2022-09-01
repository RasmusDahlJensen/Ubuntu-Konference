const validName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
const validMail = /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

const submitButton = document.getElementById("formSubmit");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const emailInput = document.getElementById("emailInput")
const errorText = document.getElementById("errorText")
const form = document.getElementById("form")
const formFeedback = document.getElementById("formFeedback")


submitButton.addEventListener("click", validateForm)
email.addEventListener("keypress", removeError)

function validateForm() {

    if (!email.value.match(validMail)) {
        showError();
    } else if (email.value.match(validMail) && fullName.value.match(validName)) {
        hideForm()
        showFeedback()
    }


    // if (fullName.value.match(validName)) {
    //     console.log("It's alright");
    // } 
    //  if (!fullName.value.match(validName)){
    //     console.log("Shits fucked");
    // }
}




function showError() {
    email.classList.add("error")
    errorText.style = "display: block"

}

function removeError() {
    email.classList.remove("error")
    errorText.style = "display: none"
}


function hideForm() {
    form.style = "display: none"
}

function showFeedback() {
    formFeedback.textContent = "Hej " +fullName.value + " tak for din interesse, vi sender nyhedsbrevene til " + email.value
}