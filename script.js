
// Employee search functionality
const searchInput = document.getElementById("searchInput");
const employeeCards = document.querySelectorAll(".employee-card");
const noResults = document.getElementById("noResults");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        let visibleCount = 0;

        employeeCards.forEach(function (card) {
            const employeeDetails = card.textContent.toLowerCase();
            const matches = employeeDetails.includes(searchText);

            card.style.display = matches ? "" : "none";

            if (matches) {
                visibleCount++;
            }
        });

        if (noResults) {
            noResults.hidden = visibleCount !== 0;
        }
    });
}

// Contact form functionality
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();
    });
}
