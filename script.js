const hamburgerButton = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const desktopNav = document.getElementById("desktop-nav");
const navbar = document.getElementById("navbar");
const logoContainer = document.getElementById("logo-container");

// Hamburger menu toggle
hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    desktopNav.classList.add("hidden"); 
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        desktopNav.classList.remove("hidden");
        mobileMenu.classList.add("hidden");
    }
});

// Adjust Navbar and Logo on Scroll
window.addEventListener("scroll", function () {
    const isMobile = window.innerWidth <= 768;
    
    if (window.scrollY > 100) {
        navbar.classList.add("py-0.5");
        navbar.classList.remove("py-4");

        if (isMobile) {
            // Mobile view adjustments
            logoContainer.style.transform = "translate(0px, 0px)"; 
            logoContainer.classList.add("w-16");
            logoContainer.classList.add("py-0.5");
            logoContainer.classList.remove("w-28");
            logoContainer.classList.remove("py-4");
        } else {
            // Desktop view adjustments
            logoContainer.style.transform = "translate(-800px, 60px)"; 
            logoContainer.classList.add("w-16");
            logoContainer.classList.add("py-0.5");
            logoContainer.classList.remove("w-28");
            logoContainer.classList.remove("py-4");
        }
    } else {
        navbar.classList.remove("py-0.5");
        navbar.classList.add("py-4");
        logoContainer.classList.remove("w-16");
        logoContainer.classList.add("w-28");
        logoContainer.style.transform = "translate(0,0)"; 
    }
});
