/* Accordion Buttons */
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

/* Blog Posts */
// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

/* Countdown */
var countdownDate = new Date("Jul 12, 2024 0:0:0").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countdownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const countdown = document.getElementById('countdown');
countdown.innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
}, 1000);

/* blog posts */
function openTab(tabId) {
    var tabs = document.getElementsByClassName("containerTab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";
}


/* Changing Copyright Year */
const currentYear = document.getElementById('currentyear');
const date = new Date();
const year = date.getFullYear();

currentYear.innerHTML = `&copy; ${year} Briana Truong. All rights reserved.`;
