document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight current active page in the navigation bar automatically
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".site-nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    // GitHub Pages hosts static files only. Do not claim that a message was delivered.
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!contactForm.reportValidity()) return;
            alert("This contact form is not yet connected to a message delivery service. No message has been sent. Please contact the website owner directly until the form is configured.");
        });
    }
});
