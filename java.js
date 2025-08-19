// Java.js - For Main.html interactions

window.onload = function () {
  console.log("✅ VibeRise Website Loaded Successfully!");

  // Fade-in animation for hero section text
  const fadeText = document.querySelectorAll(".fade-in, .fade-in-delay");
  fadeText.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.5s ease-in, transform 1.5s ease-in";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 800);
  });
};

// Example future feature: scroll to section smoothly
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
