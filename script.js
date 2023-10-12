document.addEventListener("DOMContentLoaded", function() {
    const whatsappLinks = document.querySelectorAll(".whatsapp-link");

    whatsappLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const url = this.getAttribute("href");
            window.open(url, "_blank");
        });
    });
});