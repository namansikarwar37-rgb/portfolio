// Welcome message
console.log("Portfolio Loaded Successfully");

// Know More button click
const knowMoreBtn = document.querySelector(".btn");

knowMoreBtn.addEventListener("click", function () {
    alert("Welcome to my portfolio!");
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

// Show button after scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll back to top
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const heading = document.querySelector(".hero h1");

heading.style.color = "#1e293b";
document.getElementById("year").textContent = new Date().getFullYear();