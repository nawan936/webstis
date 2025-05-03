// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navbarLinks = document.getElementById("navbar-links");
  const bars = document.querySelectorAll(".navbar-toggle .bar");

  // Fungsi untuk toggle menu
  function toggleMenu() {
    const isExpanded =
      mobileMenuButton.getAttribute("aria-expanded") === "true";

    // Toggle class active
    navbarLinks.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");

    // Update aria attributes
    mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
    navbarLinks.setAttribute("aria-hidden", isExpanded);

    // Toggle body scroll
    document.body.style.overflow = isExpanded ? "auto" : "hidden";
  }


});
