function alertthankYou() {
    alert("Thank You!!!!!!!!!!!");
}

function thankYou() {
    var x = document.getElementById("save");
    x.setAttribute("onclick", "alertthankYou()");
}
function nameContains() {
    const rentInformationForm = document.forms["rent-information-form"];
    const nameInput = rentInformationForm.elements["name"];
    nameInput.addEventListener("blur", function(event) {
        const letters = /^[A-Za-z]+$/;
        const name = nameInput.value;
        if (name.match(letters) && name.length > 3 && name.length < 20) {
            nameInput.classList.remove("bg-danger");
            nameInput.classList.add("bg-success");
        } else {
            nameInput.classList.remove("bg-success");
            nameInput.classList.add("bg-danger");
        }
    });
}
function emailContains() {
    const rentInformationForm = document.forms["rent-information-form"];
    const emailInput = rentInformationForm.elements["email"];
    emailInput.addEventListener("blur", function(event) {
        const letters = /^[A-Za-z]+$/;
        const numbers = /^[0-9]+$/;
        const specialCh = /^[@.]+$/;
        const email = emailInput.value;
        if (
            email.match(letters) ||
            email.match(numbers) ||
            email.match(specialCh)
        ) {
            emailInput.classList.remove("bg-danger");
            emailInput.classList.add("bg-success");
        } else {
            emailInput.classList.remove("bg-success");
            emailI.classList.add("bg-danger");
        }
    });
}
thankYou();
nameContains();
emailContains();
