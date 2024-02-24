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
  event.preventDefault(); // Prevent the default form submission behavior
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
  let contact = document.getElementById("contact");
  let address = document.getElementById("address");
  let mycard = document.querySelector("#my-card");
  let mycard2 = document.querySelectorAll(".my-card")[0];
  let mycard3 = document.querySelectorAll(".my-card")[1];
  let moon_icon = document.getElementsByClassName("fa-moon")[0];
  if (darkMode) {
    // Dark mode
    body.style.backgroundColor = "#02294C";
    body.style.color = "white"; // Change text color to white
    scroll_icon.style.color = "white";
    caption.style.color = "white";
    webCard.style.color = "white";
    webCard.style.backgroundColor = "#0E3360";
    uiCard.style.color = "white";
    uiCard.style.backgroundColor = "#0E3360";
    webDesignCard.style.color = "white";
    webDesignCard.style.backgroundColor = "#0E3360";
    seoCard.style.color = "white";
    seoCard.style.backgroundColor = "#0E3360";
    contact.style.backgroundColor = "#0E3360";
    address.style.backgroundColor = "#0E3360";
    address.style.color = "white";
    mycard.style.backgroundImage = "none";
    mycard.style.backgroundColor = "#0E3360";
    mycard2.style.backgroundImage = "none";
    mycard2.style.backgroundColor = "#0E3360";
    mycard3.style.backgroundImage = "none";
    mycard3.style.backgroundColor = "#0E3360";
    moon_icon.style.color = "#02294c";
  } else {
    // Light mode
    body.style.backgroundColor = "white";
    body.style.color = "#02294C"; // Change text color to black
    scroll_icon.style.color = "";
    caption.style.color = "#373a3e";
    webCard.style.color = "";
    webCard.style.backgroundColor = "";
    uiCard.style.color = "";
    uiCard.style.backgroundColor = "";
    webDesignCard.style.color = "";
    webDesignCard.style.backgroundColor = "";
    seoCard.style.color = "";
    seoCard.style.backgroundColor = "";
    contact.style.backgroundColor = "";
    address.style.backgroundColor = "";
    address.style.color = "";
    mycard.style.backgroundImage = "";
    mycard.style.backgroundColor = "";
    mycard2.style.backgroundImage = "";
    mycard2.style.backgroundColor = "";
    mycard3.style.backgroundImage = "";
    mycard3.style.backgroundColor = "";
    moon_icon.style.color = "";
  }
}

// LocalStorage for storing form data...

let sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);

  localStorage.getItem("name");
  localStorage.getItem("email");
  localStorage.getItem("message");
});
function submitted() {
  alert(
    "Your message has been received, and I'll get back to you as soon as possible. In the meantime, feel free to explore my portfolio or check out my latest projects."
  );
}
