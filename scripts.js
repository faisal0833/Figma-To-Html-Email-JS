const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(){
    const nameField = document.getElementById("contactName");
    const emailField = document.getElementById("contactEmail");
    const messageField = document.getElementById("contactMessage");

    const nameValue = nameField.value;
    const emailValue = emailField.value;
    const messageValue = messageField.value;

    const templateParams = {
        nameValue: nameValue,
        emailValue: emailValue,
        messageValue: messageValue,
    };

    if (nameValue && emailValue && messageValue){
        console.log(nameValue, emailValue, messageValue);
        emailjs.send("service_practice", "template_xdrzs3g", templateParams, "WvD1FaE2SF8Nnfv4T");
    }
})
