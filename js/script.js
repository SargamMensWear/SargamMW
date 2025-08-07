// js/script.js

// Existing JS...

// Load the footer from external file
document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const header = document.getElementById('header-placeholder');
            if (header) {
                header.innerHTML = data;
            }
        });

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footer = document.getElementById('footer-placeholder');
            if (footer) {
                footer.innerHTML = data;

                // Set current year after footer is injected
                const yearSpan = footer.querySelector('#current-year');
                if (yearSpan) {
                    yearSpan.textContent = new Date().getFullYear();
                }
            }
        });
});
