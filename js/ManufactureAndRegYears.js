$(document).ready(function () {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const endYear = 2023;

    const $yearSelect = $('.manufactureYear');

    for (let year = endYear; year >= startYear; year--) {
        $yearSelect.append('<option value="' + year + '">' + year + '</option>');
    }

    $yearSelect.select2({
        width: '100%',
        placeholder: "Manufacture Year"
    });
});

$(document).ready(function () {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const endYear = 2023;

    const $yearSelect = $('.registrationYear');

    for (let year = endYear; year >= startYear; year--) {
        $yearSelect.append('<option value="' + year + '">' + year + '</option>');
    }

    $yearSelect.select2({
        width: '100%',
        placeholder: "Registration Year"
    });
});

$(document).ready(function () {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const endYear = 2023;

    const $yearSelect = $('.popup-filter-search');

    for (let year = endYear; year >= startYear; year--) {
        $yearSelect.append('<option value="' + year + '">' + year + '</option>');
    }

    $yearSelect.select2({
        width: '100%',
        placeholder: "Registration Year"
    });
});




// In your Javascript (external .js resource or <script> tag)
// $(document).ready(function () {
//     $('.popup-filter-search').select2({
//         placeholder: "Select a state",
//         width: '100%', // Set the width to 100%
//     });
// });


document
    .getElementById("toggleAccordion")
    .addEventListener("change", function () {
        const accordion = document.getElementById("myAccordion");
        accordion.classList.toggle("show", this.checked);
    });

document
    .getElementById("automatic")
    .addEventListener("change", function () {
        const accordion = document.getElementById("myAccordion2");
        accordion.classList.toggle("show", this.checked);
    });

const checkboxes = document.querySelectorAll('input[name="engine-type"]');

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        checkboxes.forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});

