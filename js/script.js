// js/script.js

// Existing JS...

// Load the footer from external file
document.addEventListener("DOMContentLoaded", function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('footer-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            }
        });
});
