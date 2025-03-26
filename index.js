const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    displayInvalidEmail();
  } else {
    displayThankYouMessage();
  }
});

function displayInvalidEmail() {
  emailInput.classList.add("error");
  errorMessage.style.display = "inline";
}

function displayThankYouMessage() {
  window.location.href = "pages/success-page.html";
}
