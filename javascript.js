function rent() {
    var rentButton = document.getElementById("Rent");
    rentButton.addEventListener("onclick", function(event) {
        var x = document.getElementById("stock");
        if (x > 0) {
            x -= 1;
        } else {
            rentButton.setAttribute("disabled", true);
        }
    });
}

rent();
