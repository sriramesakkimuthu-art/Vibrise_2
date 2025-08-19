// Java.js - For Main.html interactions

window.onload = function() {
  console.log("VibeRise Website Loaded Successfully!");

  // Example: Fade-in effect for hero section
  const fadeText = document.querySelectorAll(".fade-in, .fade-in-delay");
  fadeText.forEach((el, index) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1.5s ease-in";
      el.style.opacity = 1;
    }, index * 800);
  });
};
