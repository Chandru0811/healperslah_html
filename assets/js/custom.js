// ===Back to Top Button ===
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===For Date Input ===
const dateInput = document.getElementById("date-input");
dateInput.addEventListener("input", () => {
  if (dateInput.value) {
    dateInput.classList.add("has-value");
  } else {
    dateInput.classList.remove("has-value");
  }
});

// ===For Number Input ====
const phoneInput = document.getElementById("phone-input");
phoneInput.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
});