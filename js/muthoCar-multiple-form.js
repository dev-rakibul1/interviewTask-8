let currentStep = 1;
const formData = {};

function showStep(step) {
    document.querySelectorAll(".form-step").forEach((stepElement) => {
        stepElement.classList.remove("show");
    });

    document
        .querySelector(`.form-step[data-step="${step}"]`)
        .classList.add("show");
}

function saveFormData() {
    const stepElement = document.querySelector(
        `.form-step[data-step="${currentStep}"]`
    );
    const inputFields = stepElement.querySelectorAll("input");

    inputFields.forEach((input) => {
        formData[input.id] = input.value;
    });
}

function nextStep() {
    saveFormData();
    currentStep++;
    showStep(currentStep);
}

function submitForm() {
    saveFormData();
    console.log("Form Data:", formData);
    alert("Form submitted successfully! Check the console for data.");
}

document.querySelectorAll(".next-btn").forEach((btn) => {
    btn.addEventListener("click", nextStep);
});

document
    .querySelector(".submit-btn")
    .addEventListener("click", submitForm);



