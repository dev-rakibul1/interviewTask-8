$(document).ready(function () {
    // Year Picker 1
    const yearInput1 = $('#yearInput1');
    const yearList1 = yearInput1.next('.year-list');

    // Populate year list for Year Picker 1
    for (let year = new Date().getFullYear(); year >= 1950; year--) {
        yearList1.append(`<li>${year}</li>`);
    }

    // Show/hide year list for Year Picker 1
    yearInput1.click(function () {
        yearList1.toggle();
    });

    // Select year for Year Picker 1
    yearList1.on('click', 'li', function () {
        const selectedYear = $(this).text();
        yearInput1.val(selectedYear);
        yearList1.hide();
    });

    // Close year list when clicking outside for Year Picker 1
    $(document).mouseup(function (e) {
        if (!yearInput1.is(e.target) && !yearList1.is(e.target) && yearList1.has(e.target).length === 0) {
            yearList1.hide();
        }
    });

    // Year Picker 2
    const yearInput2 = $('#yearInput2');
    const yearList2 = yearInput2.next('.year-list');

    // Populate year list for Year Picker 2
    for (let year = new Date().getFullYear(); year >= 1950; year--) {
        yearList2.append(`<li>${year}</li>`);
    }

    // Show/hide year list for Year Picker 2
    yearInput2.click(function () {
        yearList2.toggle();
    });

    // Select year for Year Picker 2
    yearList2.on('click', 'li', function () {
        const selectedYear = $(this).text();
        yearInput2.val(selectedYear);
        yearList2.hide();
    });

    // Close year list when clicking outside for Year Picker 2
    $(document).mouseup(function (e) {
        if (!yearInput2.is(e.target) && !yearList2.is(e.target) && yearList2.has(e.target).length === 0) {
            yearList2.hide();
        }
    });
});



document
    .getElementById("toggleAccordion")
    .addEventListener("change", function () {
        var accordion = document.getElementById("myAccordion");
        accordion.classList.toggle("show", this.checked);
    });

document
    .getElementById("automatic")
    .addEventListener("change", function () {
        var accordion = document.getElementById("myAccordion2");
        accordion.classList.toggle("show", this.checked);
    });

var checkboxes = document.querySelectorAll('input[name="engine-type"]');

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        checkboxes.forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});

