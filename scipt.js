function validator() {

    const name = document.querySelector("#fname")
    const lastName = document.querySelector("#lname")
    const email = document.querySelector("#email")

    const messageError = document.querySelector(".message-error")

    const nameValue = name.value
    const lastNameValue = lastName.value
    const emailValue = email.value

    if(nameValue === ""){
        name.classList.add("error")
        messageError.textContent = "This field is required"
    }

    if(lastNameValue === ""){
        name.classList.add("error")
        messageError.textContent = "This field is required"
    }

    if(emailValue === ""){
        name.classList.add("error")
        messageError.textContent = "This field is required"
    }
}