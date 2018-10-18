function alertthankYou() {
    alert("Thank You!!!!!!!!!!!");
}

function thankYou() {
    var x = document.getElementById("save");
    x.setAttribute("onclick", "alertthankYou()");
}
function firstNameContains() {
    const rentInformationForm = document.forms["rent-information-form"];
    const nameInput = rentInformationForm.elements["first-name"];
    nameInput.addEventListener("blur", function(event) {
        const letters = /^[A-Za-z]+$/;
        const name = nameInput.value;
        if (name.match(letters) && name.length > 1 && name.length < 20) {
            nameInput.classList.remove("bg-danger");
            nameInput.classList.add("bg-success");
        } else {
            nameInput.classList.remove("bg-success");
            nameInput.classList.add("bg-danger");
        }
    });
}
function lastNameContains() {
    const rentInformationForm = document.forms["rent-information-form"];
    const nameInput = rentInformationForm.elements["last-name"];
    nameInput.addEventListener("blur", function(event) {
        const letters = /^[A-Za-z]+$/;
        const name = nameInput.value;
        if (name.match(letters) && name.length > 1 && name.length < 20) {
            nameInput.classList.remove("bg-danger");
            nameInput.classList.add("bg-success");
        } else {
            nameInput.classList.remove("bg-success");
            nameInput.classList.add("bg-danger");
        }
    });
}

function phoneNumber() {
    const rentInformationForm = document.forms["rent-information-form"];
    const phoneNumberInput = rentInformationForm.elements["phone"];
    phoneNumberInput.addEventListener("blur", function(event) {
        const numbers = /^[0-9]+$/;
        const number = phoneNumberInput.value;
        if (number.match(numbers) && number.length < 12) {
            phoneNumberInput.classList.remove("bg-danger");
            phoneNumberInput.classList.add("bg-success");
        } else {
            phoneNumberInput.classList.remove("bg-success");
            phoneNumberInput.classList.add("bg-danger");
        }
    });
}
// thankYou();
firstNameContains();
lastNameContains();
phoneNumber();
