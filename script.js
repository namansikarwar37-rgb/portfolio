/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


/* =========================
   SCROLL TO TOP
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const formMessage = document.getElementById("formMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";

    let valid = true;


    if (name.value.trim() === "") {

        nameError.textContent = "Please enter your name.";

        valid = false;

    }


    if (email.value.trim() === "") {

        emailError.textContent = "Please enter your email.";

        valid = false;

    }
    else if (!email.value.includes("@")) {

        emailError.textContent = "Please enter a valid email.";

        valid = false;

    }


    if (message.value.trim() === "") {

        messageError.textContent = "Please enter your message.";

        valid = false;

    }


    if (valid) {

        formMessage.textContent =
            "Thank you! Your message has been submitted.";

        contactForm.reset();

    }

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   CONSOLE MESSAGE
========================= */

console.log("Portfolio loaded successfully!");