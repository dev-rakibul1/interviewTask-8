// -------------------JAVASCRIPT SELECT OPTIONS----------------------

const input = document.getElementById("autocompleteInput");
const autocompleteActive = document.querySelector(".autocomplete-add");
const optionsOverly = document.querySelector(".options-overly");
const optionsIcons = document.querySelector(".options-icons");
const dropdown = document.querySelector(
    ".autocomplete .autocomplete-items"
);

//   active options
input.addEventListener("click", () => {
    if (autocompleteActive.classList.contains("autocomplete-active")) {
        //   autocompleteActive.classList.remove("autocomplete-active");
    } else {
        autocompleteActive.classList.add("autocomplete-active");
        optionsIcons.classList.add("options-icons-rotated");
    }
});



// options overly active
input.addEventListener("click", () => {
    if (optionsOverly.classList.contains("option-overly-active")) {
        //   optionsOverly.classList.remove("option-overly-active");
    } else {
        optionsOverly.classList.add("option-overly-active");
    }
});

//   remove options
optionsOverly.addEventListener("click", () => {
    if (optionsOverly.classList.contains("option-overly-active")) {
        optionsOverly.classList.remove("option-overly-active");
        autocompleteActive.classList.remove("autocomplete-active");
        optionsIcons.classList.remove("options-icons-rotated");
    }
});

input.addEventListener("input", function () {
    const inputValue = input.value.toLowerCase();
    const items = dropdown.getElementsByTagName("div");

    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].textContent.toLowerCase();
        if (itemText.includes(inputValue)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
});

dropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        input.value = event.target.textContent;
    }
});