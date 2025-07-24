// Lightbox functions
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Close lightbox on Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// Typing animation content
document.addEventListener("DOMContentLoaded", function () {
  const typing = document.querySelector(".typing");
  typing.textContent = "Programmer | Web Developer | Designer | Student";
});
