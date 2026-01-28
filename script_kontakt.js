

function sendMail(event) {
    event.preventDefault();

    fetch("https://formspree.io/f/xbdgoyab", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }

    })
    .then(response => {
        if (response.ok) {
            alert("Vielen Dank für Ihre Nachricht!");
            event.target.reset();

            const succesbox = document.getElementById("successBox");
            succesbox.classList.add("show");

            setTimeout(() => {
                succesbox.classList.remove("show");
            }, 4000);
        } else {
            alert("Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.");
        }
    })
    .catch(error => {
        console.error("Fehler beim Senden des Formulars:", error);
        alert("Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.");
    });
}