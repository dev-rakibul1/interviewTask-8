


const offCanvasMenuClick = document.querySelector(".navbar-off-canvas-menu")
const offCanvasMenu = document.querySelector(".off-canvas-menu")
const menuOverly = document.querySelector(".menu-overly")
const clickBtn = document.querySelector('.hamburger');
const clickSearch = document.querySelector('.muthoCar-header-search');
const searchOverly = document.querySelector('.search-overly');
const searchPopup = document.querySelector('.muthoCar-search-popup');
const searchClose = document.querySelector('.search-close');


clickBtn.addEventListener("click", function () {
    if (offCanvasMenu.classList.contains("hamburger-trigger", "menu-overly-add")) {
        offCanvasMenu.classList.remove("hamburger-trigger");
        menuOverly.classList.remove("menu-overly-add");
    } else {
        offCanvasMenu.classList.add("hamburger-trigger");
        menuOverly.classList.add("menu-overly-add");
    }
});



//hamburger menu active
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
    } else {
        hamburger.classList.add('active');
    }
})

// menu overly remove
menuOverly.addEventListener('click', () => {
    if (menuOverly.classList.contains('menu-overly-add')) {
        menuOverly.classList.remove('menu-overly-add');
        offCanvasMenu.classList.remove("hamburger-trigger");
    }
})

menuOverly.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
    }
})






//Pre loader
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            ".loader-parent").style.visibility = "visible";
    } else {
        document.querySelector(
            ".loader-parent").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};




try {
    // search click
    clickSearch.addEventListener("click", function () {
        if (searchOverly.classList.contains("search-overly-add")) {
            searchOverly.classList.remove("search-overly-add");
            searchPopup.classList.remove("muthoCar-search-popup-visible");
        } else {
            searchOverly.classList.add("search-overly-add");
            searchPopup.classList.add("muthoCar-search-popup-visible");
        }
    });
} catch (error) {
    console.log(error);
}

// search overly
searchOverly.addEventListener('click', () => {
    if (searchPopup.classList.contains('muthoCar-search-popup-visible')) {
        searchPopup.classList.remove('muthoCar-search-popup-visible');
        searchOverly.classList.remove("search-overly-add");
    }
})

// search overly
searchClose.addEventListener('click', () => {
    if (searchPopup.classList.contains('muthoCar-search-popup-visible')) {
        searchPopup.classList.remove('muthoCar-search-popup-visible');
        searchOverly.classList.remove("search-overly-add");
    }
})









// Time count down
function countdownTimer(endTime) {
    const hoursOne = document.getElementById("hours-1");
    const hoursTwo = document.getElementById("hours-2");
    const minutesOne = document.getElementById("minutes-1");
    const minutesTwo = document.getElementById("minutes-2");
    const secondsOne = document.getElementById("seconds-1");
    const secondsTwo = document.getElementById("seconds-2");
    const timeCountDown = document.getElementById("time-count-down");

    const intervalId = setInterval(updateTime, 1000);

    function updateTime() {
        const currentTime = new Date().getTime();
        const timeRemaining = endTime - currentTime;

        if (timeRemaining <= 0) {
            clearInterval(intervalId);
            hoursOne.textContent = "0";
            hoursTwo.textContent = "0";
            minutesOne.textContent = "0";
            minutesTwo.textContent = "0";
            secondsOne.textContent = "0";
            secondsTwo.textContent = "0";

            if (hoursOne.textContent == "0" &&
                hoursTwo.textContent == "0" &&
                minutesOne.textContent == "0" &&
                minutesTwo.textContent == "0" &&
                secondsOne.textContent == "0" &&
                secondsTwo.textContent == "0") {
                timeCountDown.innerText = "Time is over"
            }
            return;
        }

        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Split digits into an array
        const hoursArray = String(hours)
            .padStart(2, "0")
            .split("")
            .map(Number);
        const minutesArray = String(minutes)
            .padStart(2, "0")
            .split("")
            .map(Number);
        const secondsArray = String(seconds)
            .padStart(2, "0")
            .split("")
            .map(Number);

        // Update UI with the time
        hoursOne.textContent = hoursArray[0];
        hoursTwo.textContent = hoursArray[1];
        minutesOne.textContent = minutesArray[0];
        minutesTwo.textContent = minutesArray[1];
        secondsOne.textContent = secondsArray[0];
        secondsTwo.textContent = secondsArray[1];
    }

    // Initial update
    updateTime();
}


// Set the end time (e.g., 100520-000000)
const endTime = new Date("2023-10-01T00:00:00").getTime();
const targetTime = endTime - 15 * 60 * 1000;
countdownTimer(targetTime);







// -------------------JAVASCRIPT DATE PICKER----------------------


