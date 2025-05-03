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

  // Event listener untuk tombol menu
  mobileMenuButton.addEventListener("click", toggleMenu);

  // Animasi hamburger icon
  mobileMenuButton.addEventListener("click", function () {
    bars.forEach((bar) => bar.classList.toggle("active"));
  });

  // Tutup menu saat mengklik link
  const navLinks = document.querySelectorAll(".navbar-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarLinks.classList.contains("active")) {
        toggleMenu();
        bars.forEach((bar) => bar.classList.remove("active"));
      }
    });
  });

  // Tutup menu saat resize window (jika mobile berubah ke desktop)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navbarLinks.classList.contains("active")) {
      toggleMenu();
      bars.forEach((bar) => bar.classList.remove("active"));
    }
  });
});
