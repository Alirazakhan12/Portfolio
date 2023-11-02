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
  if (scroll > 100) {
    $(".container-fluid").css("background", "#0a131d");
    $(".container-fluid").css("transition", "0.50s");
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
  strings: ["Frontend Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
