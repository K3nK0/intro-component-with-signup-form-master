const form = document.querySelector('form')
const firstName = form.querySelector('.firstNameField')
const firstNameInput = firstName.querySelector('input')
const firstNameErrorIcon = firstName.querySelector('.icon-error')
const firstNameErrorText = firstName.querySelector('.text-error')

const lastName = form.querySelector('.lastNameField')
const lastNameInput = lastName.querySelector('input')
const lastNameErrorIcon = lastName.querySelector('.icon-error')
const lastNameErrorText = lastName.querySelector('.text-error')

const email = form.querySelector('.emailField')
const emailInput = email.querySelector('input')
const emailErrorIcon = email.querySelector('.icon-error')
const emailErrorText = email.querySelector('.text-error')

const password = form.querySelector('.password')
const passwordInput = password.querySelector('input')
const passwordErrorIcon = password.querySelector('.icon-error')
const passwordErrorText = password.querySelector('.text-error')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkFirstName()
    checkLastName()
    checkEmail()
    checkPassword()
})

function checkFirstName(){
    if(firstNameInput.value === ""){
        firstNameErrorIcon.classList.add('iconError')
        firstNameErrorText.classList.add('textError')
        firstNameInput.classList.add('input-error')
    }
    else{
        firstNameErrorIcon.classList.remove('iconError')
        firstNameErrorText.classList.remove('textError')
        firstNameInput.classList.remove('input-error')
    }
}

function checkLastName() {
    if(lastNameInput.value === ""){
        lastNameErrorIcon.classList.add('iconError')
        lastNameErrorText.classList.add('textError')
        lastNameInput.classList.add('input-error')
    }
    else{
        lastNameErrorIcon.classList.remove('iconError')
        lastNameErrorText.classList.remove('textError')
        lastNameInput.classList.remove('input-error')
    }
}

function checkEmail(){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!emailInput.value.match(regexEmail)){
        emailErrorIcon.classList.add('iconError')
        emailErrorText.classList.add('textError')
        emailInput.classList.add('input-error')
    }
    else{
        emailErrorIcon.classList.remove('iconError')
        emailErrorText.classList.remove('textError')
        emailInput.classList.remove('input-error')
    }
}

function checkPassword(){
    if(passwordInput.value === ""){
        passwordErrorIcon.classList.add('iconError')
        passwordErrorText.classList.add('textError')
        passwordInput.classList.add('input-error')
    }
    else{
        passwordErrorIcon.classList.remove('iconError')
        passwordErrorText.classList.remove('textError')
        passwordInput.classList.remove('input-error')
    }
}