// =========================
// Part 1: Event Handling
// =========================
const form = document.getElementById("registrationForm");
const output = document.getElementById("output");
const togglePasswordBtn = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");
const themeToggleBtn = document.getElementById("themeToggle");

// =========================
// Part 2: Interactive Features
// =========================

// 1. Toggle dark/light mode
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Toggle password visibility
togglePasswordBtn.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePasswordBtn.textContent = "Hide Password";
  } else {
    passwordField.type = "password";
    togglePasswordBtn.textContent = "Show Password";
  }
});

// 3. Collapsible FAQ
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// =========================
// Part 3: Form Validation
// =========================
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordField.value.trim();
  const course = document.getElementById("course").value;

  let errors = [];

  // Name validation
  if (name.length < 3) errors.push("Name must be at least 3 characters.");

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) errors.push("Enter a valid email.");

  // Password validation
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  // Course selection
  if (!course) errors.push("Please select a course.");

  // Display results
  if (errors.length > 0) {
    output.innerHTML = `<p style="color:red;">${errors.join("<br>")}</p>`;
  } else {
    output.innerHTML = `<p style="color:green;">${name} successfully registered for ${course}!</p>`;
    form.reset();
    togglePasswordBtn.textContent = "Show Password";
  }
});
