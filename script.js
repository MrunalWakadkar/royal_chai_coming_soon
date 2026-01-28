// Initialize EmailJS
(function () {
    emailjs.init("tPEN5q8obZhBIW450");
})();

// Launching Soon animation
const launch = document.getElementById("launching");
launch.addEventListener("click", () => {
    launch.classList.add("animate");
    setTimeout(() => launch.classList.remove("animate"), 900);
});

// Send Email
document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("userEmail").value;

    emailjs.send("service_p6ca92g", "template_vrtf4vp", {
        user_email: email
    })
    .then(() => {
        alert("Thank you! You will be notified when we launch.");
        e.target.reset();
    })
    .catch(() => {
        alert("Something went wrong. Please try again.");
    });
});
