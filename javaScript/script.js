let para = document.getElementById("hidePara");
let btnreadMore = document.getElementById("readmore");
function show() {
  if (para.style.display == "none") {
    para.style.display = "block";
    btnreadMore.innerText = "Read less";
  } else {
    para.style.display = "none";
    btnreadMore.innerHTML = "Read More";
  }
}

//With scrolling Nav background appear

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll > 40) {
    $(".container-fluid").css("background", "#0E3360");
    $(".container-fluid").css("transition", "1s");
  } else {
    $(".container-fluid").css("background", "transparent");
    $(".container-fluid").css("transition", "");
  }
});

// scrolltoTop btn start

function toggleScrollbtn() {
  let scrol = document.getElementById("scroll-icon");
  if (window.scrollY >= 200) {
    scrol.style.display = "block";
  } else {
    scrol.style.display = "none";
  }
}

function scrollup() {
  window.scroll(0, 0);
}

// scrolltoTop btn end

// Auto type js
let type = new Typed(".auto-type", {
  strings: ["Ali Raza", "Frontend", "Developer"],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

//------ Mode change code  ------//

const body = document.body;
const modeToggle = document.getElementById("moon-icon");

let darkMode = false;

modeToggle.addEventListener("click", (event) => {
  event.preventDefault();     // Prevent the default form submission behavior
  darkMode = !darkMode;
  updateTheme();
});

function updateTheme() {
  let scroll_icon = document.getElementById("scroll-icon");
  let caption = document.getElementById("caption");
  let webCard = document.getElementById("web-card");
  let uiCard = document.getElementById("ui-ux-card");
  let webDesignCard = document.getElementById("web-design-card");
  let seoCard = document.getElementById("seo-card");
  let cvBtn = document.getElementById("cv-btn2");
  if (darkMode) {
    // Dark mode
    body.style.backgroundColor = "#02294C";
    body.style.color = "white"; // Change text color to white
    scroll_icon.style.color = "white";
    caption.style.color = "white";
    webCard.style.color = "black";
    uiCard.style.color = "black";
    webDesignCard.style.color = "black";
    seoCard.style.color = "black";
    cvBtn.style.color = "white";
  } else {
    // Light mode
    body.style.backgroundColor = "white";
    body.style.color = "#02294C"; // Change text color to black
    scroll_icon.style.color = "#3877ff";
    caption.style.color = "#373a3e";
  }
}
