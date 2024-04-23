/* accordion */
const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});


/* countdown */
var countdownDate = new Date("Jul 12, 2024 0:0:0").getTime();

var x = setInterval(function() {

const now = new Date().getTime();

var distance = countdownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

const countdown = document.getElementById('countdown');
days.innerHTML = days 
countdown.innerHTML = days + " DAYS " + hours + " HOURS "
+ minutes + " MINUTES " + seconds + " SECONDS ";
}, 1000);

/* blog posts */
function openTab(tabId) {
    var tabs = document.getElementsByClassName("containerTab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";
}

/* pop up button */
document.getElementById("popupBtn").addEventListener("click", function myComment() {
  alert ("Hello Stephen! We really appreciated your class this semester, we learned a ton and you were a great instructor :) Best of luck with future endeavors and hopefully see you around campus!");
});

/* Changing Copyright Year */
const currentYear = document.getElementById('currentyear');
const date = new Date();
const year = date.getFullYear();

currentYear.innerHTML = `&copy; ${year} Briana Truong. All rights reserved.`;
