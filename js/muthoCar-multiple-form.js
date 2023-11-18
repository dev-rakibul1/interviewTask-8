const userLocation = document.getElementById("location").innerText;
const carOthers = document.getElementById("carOthers").value;
const otherBrands = document.getElementById("otherBrands").value;
const othersVehiclesTitle = document.getElementById("othersVehiclesTitle").value;
const manufactureYear = document.getElementById("manufactureYear").value;
const registrationYear = document.getElementById("registrationYear").value;


// checkbox value collection
// let errorMeg = document.getElementById("errorMeg")
let collectedValues = {};

const checkboxes = document.querySelectorAll('.checkbox');
function collectCheckboxValues() {
    collectedValues = {};

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            collectedValues[checkbox.value] = checkbox.value;
        }
    });

    console.log(collectedValues);
}


// IP get
fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => {
        ip = data;
        getUserLocation(ip);
    })
    .catch((error) => {
        console.error("Error fetching IP:", error);
    });

// User location get
const getUserLocation = (ipData) => {
    fetch(`https://ipinfo.io/${ipData.ip}?token=51ac8447cbb768`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('location').innerText = `${data?.city}, ${data?.region}`;
        })
        .catch((error) => {
            console.error("Error fetching user location:", error);
        });
};



document.addEventListener('DOMContentLoaded', function () {

    const iconValue = document.querySelectorAll('.form-step span');
    let iconArrayValues = [];

    iconValue.forEach((checkbox) => {
        checkbox.addEventListener('click', function () {
            checkbox.classList.toggle('clicked');
            updateCollectedValues();
        });
    });

    function updateCollectedValues() {
        iconArrayValues = [];
        iconValue.forEach((checkbox) => {
            if (checkbox.classList.contains('clicked')) {
                iconArrayValues.push(checkbox.innerText);
            }
        });
        console.log(iconArrayValues);
        console.log(iconArrayValues.length);
    }



    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-btn');
    const submitButton = document.querySelector('#submitBtn');
    const carOptions = document.querySelectorAll('.car-option');

    let currentStep = 0;
    const formData = {};

    function showStep(stepIndex) {
        formSteps.forEach((step, index) => {
            step.classList.remove('show');
            if (index === stepIndex) {
                step.classList.add('show');
            }
        });
    }

    function collectFormData(stepIndex) {
        const step = formSteps[stepIndex];
        const inputs = step.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            formData[input.id] = input.value;
        });
    }

    // form validation
    function validateStep(stepIndex) {

        const step = formSteps[stepIndex];
        const inputs = step.querySelectorAll('input, textarea');

        for (const input of inputs) {
            if (input.required && input.value.trim() === '') {
                alert('Please fill in all required fields.');
                return false;
            }

            switch (input.id) {
                case 'price':
                    if (isNaN(input.value)) {
                        alert('Please enter a valid number for the price.');
                        return false;
                    }
                    break;

                case 'manufactureYear':
                case 'registrationYear':
                case 'engineCapacity':
                case 'kilometersRun':
                    if (isNaN(input.value) || input.value <= 0) {
                        alert(`Please enter a valid positive number for ${input.id}.`);
                        return false;
                    }
                    break;
                // case 'carOthers':
                //     if (iconArrayValues.length) {
                //         if (input.value === "") {
                //             alert("Other fields is required!")
                //             return false;
                //         }
                //     }
                //     break;

            }


            // if (iconArrayValues.length) {
            //     errorMeg.innerText = "Car choose is required!";
            //     document.getElementById("choose-car").setAttribute("disabled", "disabled");
            //     return;
            // } else {
            //     errorMeg.innerText = "";
            // }
        }

        return true;
    }

    function handleNextButtonClick() {
        if (validateStep(currentStep)) {
            collectFormData(currentStep);
            currentStep++;
            if (currentStep < formSteps.length) {
                showStep(currentStep);
            } else {

                // IP get
                fetch("https://api.ipify.org?format=json")
                    .then((res) => res.json())
                    .then((data) => {
                        ip = data;
                        console.log("IP address:", ip);
                        getUserLocation(ip);
                    })
                    .catch((error) => {
                        console.error("Error fetching IP:", error);
                    });

                // User location get
                const getUserLocation = (ipData) => {
                    fetch(`https://ipinfo.io/${ipData.ip}?token=51ac8447cbb768`)
                        .then((res) => res.json())
                        .then((data) => {

                            // The form is complete, you can now use formData
                            const userCollection = {
                                automatic: collectedValues?.automatic,
                                cng: collectedValues?.cng,
                                description: formData?.description,
                                diesel: collectedValues?.diesel,
                                engineCapacity: formData?.engineCapacity,
                                kilometersRun: formData?.kilometersRun,
                                location: `${data?.city}, ${data?.region}`,
                                lpg: collectedValues?.lpg,
                                manual: collectedValues?.manual,
                                manufactureYear: formData?.manufactureYear,
                                negotiable: collectedValues?.Negotiable,
                                octane: collectedValues?.octane,
                                price: formData?.price,
                                registrationYear: formData?.registrationYear,
                                collectedValues: iconArrayValues,
                                userCurrentLocation: data,
                                userLocation: userLocation,
                                carOthers: carOthers,
                                otherBrands: otherBrands,
                                othersVehiclesTitle: othersVehiclesTitle,
                                manufactureYear: manufactureYear,
                                registrationYear: registrationYear,
                            }

                            console.log("object", userCollection);
                        })
                        .catch((error) => {
                            console.error("Error fetching user location:", error);
                        });
                };

            }
        }
    }

    function handleCarOptionClick(event) {
        const selectedCarOption = event.target.innerText;
        formData['selectedCarOption'] = selectedCarOption;
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', handleNextButtonClick);
    });

    // submitButton.addEventListener('click', function () {
    //     console.log('Form Data:', formData);
    //     // Add your logic to submit the form data
    // });

    carOptions.forEach(option => {
        option.addEventListener('click', handleCarOptionClick);
    });
});


