// ===============================
// Part 3: Animate Box with JS
// ===============================
const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
    toggleBoxAnimation(animatedBox);
});

// Function demonstrating parameters, return, and local scope
function toggleBoxAnimation(box) {
    if (box.style.transform === "rotate(360deg)") {
        box.style.transform = "rotate(0deg)";
        box.style.backgroundColor = "#e74c3c";
    } else {
        box.style.transform = "rotate(360deg)";
        box.style.backgroundColor = "#3498db";
    }
}

// ===============================
// Part 3: Card flip
// ===============================
const flipBtn = document.getElementById("flipBtn");
const flipCard = document.getElementById("flipCard");

flipBtn.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
});

// ===============================
// Part 2: JS Function - Calculator
// ===============================
const sumBtn = document.getElementById("sumBtn");
const sumResult = document.getElementById("sumResult");

sumBtn.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = addNumbers(num1, num2); // Function call with parameters
    sumResult.textContent = "Sum: " + sum;
});

// Function demonstrating return value
function addNumbers(a, b) {
    // Local variables: a, b
    if (isNaN(a) || isNaN(b)) {
        return "Invalid input"; // Return value
    }
    return a + b;
}
