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
// Animate skill bars on scroll
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
    // Store original width
    const targetWidth = bar.textContent;
    bar.setAttribute("data-target", targetWidth);
    bar.style.width = "0%";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = bar.getAttribute("data-target");
        bar.style.width = target;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => observer.observe(bar));
});

