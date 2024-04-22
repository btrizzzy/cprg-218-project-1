/* Accordion Buttons */
const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
  button.addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

/* Changing Copyright Year */
const currentYear = document.getElementById('currentyear');
const date = new Date();
const year = date.getFullYear();

currentYear.innerHTML = `&copy; ${year} Briana Truong. All rights reserved.`;
